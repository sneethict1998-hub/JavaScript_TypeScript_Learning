/*
Playwright Architechture

Playwright automation script =>ts program 
ts program once u click on run button
program(client) => node.js (act as server)
            (Websocket connection)
Websocket connection <=>statefull connection (Bidirectional)

Each line will be converted into JSON message and will be passed to node.js
node.js => execute that in Binaries or Browsers

3 Binaries :
Chromium engine + injected playwright features (autowaiting) => Chromium binary
Real Browsers : Chrome
                msedge
                brave
                opera
Nightly firefox Binary 
    No support real browsers
Webkit Binary 
    No support real browsers

Playwright Installation at folder level
1. Create a new folder

To open command palette > ctrl+shift+p

By default, playwright will run in headless mode

To run playwright test :
npx playwright test


*/