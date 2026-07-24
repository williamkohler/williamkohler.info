---
name: hihat
tagline: An operating system for the live-music business.
summary: >-
  A Phoenix LiveView platform for the live-music industry. It ingests offers and
  deal-memo PDFs, pulls tour routing from Ticketmaster and Bandsintown, scores
  promoter demand signals, and runs fan-facing storefronts — the tooling I wished
  existed when I was booking shows.
demo: https://hihat.online
repoStatus: private
tech: [Elixir, Phoenix, LiveView, Oban, PostgreSQL, Fly.io]
year: "2025–"
icon: /icons/open-hihat.svg
iconHover: /icons/closed-hihat.svg
screenshot:
  - hihat-calendar.png
  - hihat-demand-signals.png
  - hihat-signal-detail.png
screenshotAlt:
  - The routing calendar for the artist 100 Gecs, showing a July 2026 month grid with a confirmed $18,000 date at the Ogden Theatre in Denver and a pencilled hold at The Van Buren in Phoenix.
  - The promoter demand-signals discovery board, listing emerging artists as cards with an opportunity score, a weighted signal bar, a 60-day demand trend line, and Interested or Pass actions.
  - A signal detail panel for the band American Football, showing a suggested guarantee range of $1,000–$2,000, a 60-day demand index chart, and a radar plot breaking the opportunity score into ticket intent, velocity, live performance, web buzz, and sync demand.
order: 1
highlights:
  - Offer and deal-memo PDF ingestion with structured extraction, turning unstructured contracts into queryable deal terms.
  - Tour-date aggregation across the Ticketmaster and Bandsintown APIs.
  - Promoter demand-signal scoring to rank markets and routing options.
  - Hold optimizer for resolving competing venue holds on the same date.
  - Fan commerce and artist storefronts.
---
