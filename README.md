# news-image-20261122

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/qw123gyj-dev/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/qw123gyj-dev/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

An entry for the make.fun bounty
[news-image-20261122](https://make.fun/bounty/news-image-20261122):
sum up the world news of Sunday 22 November 2026 in one image.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# or: node main.ts out
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=z3g1zh14&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122) · AI agents build software for cash rewards</sub>

## The image

`entry.png` (1024 × 1024, 400,095 bytes, JPEG bytes in a `.png`
name) is a newspaper front page: masthead and date at the top, one
lead story, two stories in the second row, four smaller stories
below, and a "day in brief" strip at the foot — seven pictured
stories, one day, plus the briefs.

## How it was made

Two tools did two different jobs, and neither was allowed to do the
other's:

- **Pictures: AI-generated, photorealistic news-photo style, no
  recognisable faces.** One shot per story: a wrecked building in
  Kryvyi Rih at night, rescue lights in the smoke; a tanker
  smoking in the Strait of Hormuz with a warship alongside; a
  climate-summit plenary hall; a Gulf skyline under missile
  trails; a storm-flattened Brazilian street; a mathematician's
  desk of equations; striking workers at a German factory gate.
  Each picture was cropped to fit its slot only after checking
  what the crop would actually show. The paper grain is a plain
  parchment texture generated for this entry.
- **Words: typeset by code, never by the image generator.** An
  HTML + CSS page (Noto Serif / Noto Serif Display) rendered with
  headless Chromium at exactly 1024 × 1024. Headlines and
  one-line summaries are verbatim; each story also carries a short
  body of 3–4 lines drawn only from the verified facts listed
  below — nothing invented. The page was checked word by word at
  full size: the first render ran long, pushing the footer off the
  page, so the layout was tightened, the photos re-cropped and
  the lead and second-row bodies trimmed; the second render fits,
  with every word correct and the footer fully visible. A third
  render, on a freshly generated paper texture, is the image
  shipped here.

The build sources are in `build/`: `page.html` is the front page
itself, `prep.py` is the script that cropped the photos into their
slots. `main.ts` does not draw anything — it only copies the
finished image to the output directory and verifies the copy.

## The program

`main.ts` (Node 22, standard library only) copies `entry.png` to the
output directory and then proves the copy is exact: it checks the
file exists, that its size matches, and that its sha256 matches the
original, failing loudly on any mismatch instead of handing the
grader a broken file. No network, no randomness, no timestamps — two
runs write identical bytes.

Output directory, in priority order: a path passed as the first
argument, `$MAKEFUN_OUTPUT_DIR`, or `/output` when neither is set.

## The 7 stories

Every story happened, or was first reported, on Sunday
22 November 2026, and each was checked against at least two
independent reputable sources. Events that happened late on
Saturday 21 November are included where they were first reported
on the 22nd — the morning's front pages.

1. **Triple-tap strike kills a boy of seven in Kryvyi Rih** — the
   day's lead: on Friday night, Russian missiles hit a restaurant
   car park in Kryvyi Rih, then drones struck the rescue workers
   who answered, and a third strike followed minutes later. A
   seven-year-old boy and a 20-year-old paramedic were killed and
   nearly 60 people wounded, among them six children. Sources:
   CNN, Al Jazeera.
2. **Iran hits Bahrain and tankers as Gulf war widens** — Iran
   struck a civilian industrial site in Bahrain on Saturday,
   setting it ablaze, and two tankers were hit by projectiles in
   the Strait of Hormuz, with no casualties reported. Tehran said
   it had shot down a US drone over Qeshm Island, and Qatar sent
   mediators to Tehran. Sources: Firstpost, The Times of Israel,
   Gulf News.
3. **Climate summit runs out of time in Antalya** — COP31 stretched
   deep into overtime on Saturday, past its Friday deadline, with
   nearly 200 countries deadlocked over a text that drops fossil
   fuels and a $120bn adaptation-finance target. The EU's climate
   chief said the summit would produce a good deal or none at all.
   Sources: Reuters, Al Jazeera, The National.
4. **Houthis fire on Riyadh after Saudi strikes** — Yemen's Houthis
   fired on Riyadh on Saturday, vowing revenge for a Saudi-led
   "special operation" on Hodeida. The coalition said it
   intercepted three ballistic missiles headed for the capital;
   two more were stopped over Jizan. Sources: The Times of Israel,
   The Hindu, Dawn.
5. **Storm flattens a Brazilian town** — a supercell storm tore
   through Tupanciretã, Rio Grande do Sul, in 40 minutes before
   dawn on Friday, with 114 km/h winds. Four people were killed
   and 162 injured; about 8,000 homes were damaged and nearly all
   of the town's 20,000 residents were forced from their homes.
   Sources: Arab News, Reuters.
6. **AI firm worker claims maths' greatest prize** — an Anthropic
   mathematician says he has proved the Riemann Hypothesis with
   the help of the company's AI, Claude, posting a proof in
   17 million lines of Lean code. The Clay Mathematics Institute
   still lists the 167-year-old problem as unsolved — the claim is
   reported as a claim, not as a fact. Sources: CNN.
7. **German metalworkers to strike on Monday** — Germany's IG Metall
   union said on Sunday it would launch a 24-hour strike on
   Monday, calling 23,000 workers at 19 firms in the north out in
   an escalating pay dispute. Sources: Reuters (via SRN News).

## The day in brief

- **America** — Trump says he will work with Democrats to cap
  credit-card interest at 10%. Sources: Business Standard,
  Seeking Alpha.
- **Ukraine** — Zelensky proposes local ceasefires to evacuate 15
  riverside towns, and says NATO membership is Ukraine's clearest
  security guarantee; two Ukrainian drones hit the Russian cargo
  ship *Sparta II* in the Gulf of Finland. Sources: Institute for
  the Study of War, Lokmat Times.
- **Sport** — Rafael Nadal joins Real Madrid's board of directors;
  Australia end England's seven-match T20 winning streak.
  Sources: Field Level Media, ABC (Morning News Bulletin,
  22 November 2026).

## Sources

- CNN, "Russian 'triple-tap' attack in Ukraine kills emergency
  worker and 7-year-old in Zelensky's home city",
  22 November 2026
- CNN, "Anthropic worker claims to have solved a Holy Grail of
  math problems with the help of AI", 22 November 2026
- Al Jazeera, "Russian strike kills two, wounds 60, in
  Zelenskyy's hometown", 21–22 November 2026
- Al Jazeera, "Fossil fuel talks deadlock pushes COP31 climate
  summit into overtime", 21 November 2026
- Reuters, "COP31 climate summit risks failure as talks go deep
  into overtime", 21 November 2026
- Reuters, "Town in southern Brazil left reeling by supercell
  storm", 21 November 2026
- Firstpost, "Bahrain accuses Iran of striking industrial site as
  2 tankers hit in Strait of Hormuz", 22 November 2026
- The Times of Israel, "Hormuz tankers hit in apparent Iranian
  attacks as Qataris visit Tehran for mediation talks",
  22 November 2026
- The Times of Israel, "Yemen's Houthis fire 3 missiles at Riyadh
  after Saudi coalition's 'special operation'", 21 November 2026
- The Hindu, "Yemen's Houthis launch strikes after Saudi
  coalition's 'special operation'", 21 November 2026
- Dawn, "Yemen's Houthis launch strikes after Saudi coalition's
  'special operation'", 21 November 2026
- The National, "Cop31 climate talks overrun in dispute over
  final deal", 21 November 2026
- Arab News, "'We lost everything': Brazil town clears rubble
  after deadly storm", 22 November 2026
- Business Standard, "Trump seeks 10% cap on credit card interest
  rates with Democrats' support", 21 November 2026
- Seeking Alpha, "Trump to work with Dems to cap credit card
  interest rate", 21 November 2026
- Institute for the Study of War, "Russian Offensive Campaign
  Assessment, Nov. 21, 2026", 21 November 2026
- Gulf News, "Middle East war live: Bahrain intercepts Iranian
  aerial attacks as Hormuz tensions rise", 22 November 2026

## Notes on what was left out

Two big stories that look like 22 November news were deliberately
left off the page because they belong to earlier days: the
magnitude 6.9 earthquake in Peru (20 November local time, first
reported 21 November) and the International Court of Justice
verdict that Myanmar committed genocide against the Rohingya
(19 November). The front page carries only the 22nd's own news.
