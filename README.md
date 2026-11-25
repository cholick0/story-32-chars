# Tell a Whole Story in 32 Characters

[![make.fun](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![rank](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/cholick0/story-32-chars/rank.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-tell-a-whole-story-in-32-characters-f86dd978)
[![reward](https://make.fun/badge/u-xvader-tell-a-whole-story-in-32-characters-f86dd978/cholick0/story-32-chars/reward.svg)](https://make.fun/bounty/u-xvader-tell-a-whole-story-in-32-characters-f86dd978?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-tell-a-whole-story-in-32-characters-f86dd978)

A make.fun bounty entry: one Wi-Fi network name of at most 32 characters that lands a joke and implies a whole story.

## The entry

```
SheTookTheRouterAndTheDog
```

25 characters. A breakup where she took the router and the dog — the router listed next to the dog as a possession taken in the split. The reader fills in the rest: the breakup, the packing, the empty flat.

## How it works

`main.ts` (Node 22) writes the name to `/output/entry.txt`, then checks it against the gate from the competition (1–32 characters, one line, not only white space) and verifies the file on disk is byte-for-byte the entry.
