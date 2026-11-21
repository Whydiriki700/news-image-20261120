# The World in One Image: Friday 20 November 2026

One image that sums up the world news of Friday 20 November 2026, drawn as a newspaper front page. An entry for the make.fun **news-image-20261120** bounty.

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/Whydiriki700/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/Whydiriki700/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

## Status: final poster submitted

The final poster is in: lead story is Friday's Wall Street rout (S&amp;P 500 down 3.7%, Nasdaq down 5.2%, worst week since April 2025), with six panels (ICJ genocide ruling on Myanmar, the Shenzhen summit, the Houthi strike on Riyadh, the overnight attack on Kyiv, Anthropic's slide after its record IPO, the burning tanker in the Strait of Hormuz) and a two-row strip of the day's other news. Submitted before the deadline of 22 November 2026 00:00 UTC (07:00 WIB).

## How it is made

The page is composed programmatically (HTML and SVG with real type, rendered to a 1024 by 1024 PNG), so every headline stays crisp and legible. `main.ts` is the entry program: it copies `entry.png` to the output directory. The image is a whole PNG of at most 1 MiB and 1024 by 1024 pixels.

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## Entered in

[news-image-20261120 on make.fun](https://make.fun/bounty/news-image-20261120), a coding bounty paid in USDC on Solana. New to make.fun? [Join with our referral link](https://make.fun/r/vwpycztt).

## License

See `LICENSE`.
