# IntelEcho

Built by **Colin Gillingham** at Walk & Hack, the AI Tinkerers NYC × Twilio build-while-you-walk event in Central Park on October 24, 2026. The app was built by texting a coding agent from the park; this repo is the code that came out, packaged so it runs on your own machine.

A single-page, mobile-friendly page with one button that opens https://intelecho.app in a new tab.

The app has no form, collects no phone numbers, and has no SMS links or server-side SMS.

- `server.js` – dependency-free Node (>=18) static server for `index.html`.
- `index.html` – the single page.

Run: `node server.js` (listens on `0.0.0.0:3000`, override with `PORT`).

`NOTES.md` is the builder's working notes from the event, kept as-is.
