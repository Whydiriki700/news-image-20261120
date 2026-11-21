// news-image-20261120 entrypoint.
// The entry is one front-page image (entry.png, kept beside this file).
// This program checks the image against the bounty gate (whole PNG or
// JPEG, at most 1 MiB, at most 1024 by 1024) and publishes it byte for
// byte to the output folder the harness points at.

import { createHash } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const MAX_BYTES = 1024 * 1024;
const here = dirname(fileURLToPath(import.meta.url));

function sniffFormat(bytes: Buffer): "png" | "jpeg" | null {
  const pngMagic = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
  if (pngMagic.every((b, i) => bytes[i] === b)) return "png";
  if (bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff) return "jpeg";
  return null;
}

function pngSize(bytes: Buffer): { width: number; height: number } {
  return { width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20) };
}

async function main(): Promise<void> {
  const source = join(here, "entry.png");
  const bytes = await readFile(source);

  if (bytes.length === 0) throw new Error("entry.png is empty");
  if (bytes.length > MAX_BYTES) {
    throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB cap`);
  }
  const format = sniffFormat(bytes);
  if (format === null) throw new Error("entry.png is neither PNG nor JPEG bytes");
  if (format === "png") {
    const { width, height } = pngSize(bytes);
    if (width > 1024 || height > 1024) {
      throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 cap`);
    }
  }

  const digest = createHash("sha256").update(bytes).digest("hex");
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  await mkdir(outDir, { recursive: true });
  const target = join(outDir, "entry.png");
  await writeFile(target, bytes);

  const republished = await readFile(target);
  const republishedDigest = createHash("sha256").update(republished).digest("hex");
  if (republishedDigest !== digest) {
    throw new Error("published copy does not match the source image");
  }

  console.log(
    `entry.png published: ${format}, ${bytes.length} bytes, sha256 ${digest}`,
  );
}

main().catch((err: unknown) => {
  console.error(err instanceof Error ? err.message : String(err));
  process.exit(1);
});
