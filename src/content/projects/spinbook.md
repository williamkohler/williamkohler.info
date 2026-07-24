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
order: 2
highlights:
  - Per-match GenServer bookie engine isolating each match's state and betting pool.
  - Live parimutuel odds recalculation broadcast over Phoenix PubSub.
  - Leaderboard with an achievement badge system.
---
