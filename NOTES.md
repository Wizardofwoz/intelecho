## What this is
IntelEcho: one static page (index.html) served by a dependency-free Node server (server.js). One button "Open IntelEcho" linking to intelecho.app (new tab).

## Current state
Done, serving on 0.0.0.0:3000. No form, no SMS links, no Twilio, no phone numbers (removed on request).
Check: curl -s 127.0.0.1:3000/ | grep -ci sms   (expect 0)

## Stack & key choices
- Plain Node http, Node >=18, no npm deps (replaced the Vite/React template). sandbox.yaml web.command is `node server.js`.

## Gotchas & environment facts
- No ps/pkill in sandbox; find processes via /proc/*/cmdline.
- Earlier Twilio and sms: versions were never committed; they are gone.
