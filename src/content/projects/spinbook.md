---
name: spinbook
tagline: A parimutuel betting engine for Beyblade X matches.
summary: >-
  A real-time wagering app built to push OTP where it is strongest. Each match
  runs its own GenServer bookie process, recalculating odds as bets land and
  broadcasting them over Phoenix PubSub so every connected client stays in sync
  without a page refresh.
repoStatus: private
tech: [Elixir, Phoenix, LiveView, GenServer, PubSub, Tailwind CSS]
year: "2026"
icon: /icons/spinbook-blade.png
iconInvertOnDark: false
iconSpin: true
screenshot:
  - spinbook-matches.png
  - spinbook-betting.png
  - spinbook.png
screenshotAlt:
  - The spinbook match list, showing live Beyblade X matchups with each player's three-blade lineup and the ratchet and bit combination for every blade.
  - A live spinbook match between Bird and Keel, with round-by-round versus banners and three betting markets — Outcome, Technical, and Chaos — offering wagers on the round winner, first X-Dash scorer, match duration, and a double burst, each showing as locked while awaiting a result.
  - The spinbook leaderboard — a frosted-glass podium ranking the top three bettors by BeyCoin balance, above a list of remaining ranks.
order: 2
highlights:
  - Per-match GenServer bookie engine isolating each match's state and betting pool.
  - Live parimutuel odds recalculation broadcast over Phoenix PubSub.
  - Leaderboard with an achievement badge system.
---
