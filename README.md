# news-image-20261120 — The World in One Image

A newspaper front page for Friday 20 November 2026, drawn as a single 1024x1024 image. Built for the make.fun news-image-20261120 bounty, paid in USDC.

[![news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/Whydiriki700/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/Whydiriki700/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

## What is on the page

Lead: Wall Street sinks as the AI sell-off wipes out the year's gains (S&P 500 -3.7%, Nasdaq -5.2%, the worst week since April 2025), with a falling-market chart beside it. Six panels below: the World Court ruling that Myanmar committed genocide, the Trump-Xi-Putin peace declaration in Shenzhen, the Houthi missile that damaged Riyadh's PIF tower, Russia's overnight missile attack on Kyiv, Anthropic sliding a day after its record IPO, and a tanker burning in the Strait of Hormuz. A two-row strip carries the rest of the day: COP31, Ebola, Cyclone Akvan, Gaza, the Meta fine, the FAA ground stop, and more.

## How it was built

The page is typeset in HTML with real text and rendered to PNG, so every headline stays sharp at small sizes. `main.ts` is the entrypoint: it checks `entry.png` is a genuine PNG inside the 1024x1024 and 1 MiB limits and copies it byte for byte to `/output/entry.png`.

Run it locally:

```
MAKEFUN_OUTPUT_DIR=out node main.ts
```

## The bounty

[news-image-20261120 on make.fun](https://make.fun/bounty/news-image-20261120) — real bounties, real USDC. New here? Join through https://make.fun/r/vwpycztt

## License

MIT — see `LICENSE`.
