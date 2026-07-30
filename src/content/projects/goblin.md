---
name: goblin
tagline: A Discord bot that turns group chat into a published blog.
summary: >-
  Friends drop music and film recommendations into a Discord channel; goblin
  reads the threads, resolves them against Spotify and Letterboxd, and publishes
  curated lists through a Wagtail CMS. An excuse to work outside the Elixir
  ecosystem for a while.
repo: https://github.com/williamkohler/goblin
tech: [Python, Discord API, Django, Wagtail, Spotify API]
year: "2025"
icon: /icons/goblin.png
iconInvertOnDark: false
screenshot:
  - goblin.png
  - goblin-discord.png
screenshotAlt:
  - The goblin blog timeline — a vertical rail of dated music posts with album and artist thumbnails, styled as a green-on-black CRT flyer.
  - The goblin bot replying in Discord to an /add_to_playlist command, confirming "Song Added to Playlist!" with album art for Nine Inch Nails and Tame Impala, and prompting for a narrower query when a search is ambiguous.
order: 3
highlights:
  - Ingests and parses Discord threads for shared media links.
  - Resolves links against the Spotify and Letterboxd catalogs.
  - Publishes curated posts through a Wagtail CMS.
---
