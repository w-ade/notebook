"use strict";
const electron = require("electron");
const path = require("node:path");
const RENDERER_DIST = path.join(__dirname, "../dist");
let win = null;
function createWindow() {
  win = new electron.BrowserWindow({
    width: 470,
    height: 780,
    minWidth: 380,
    minHeight: 560,
    // hiddenInset keeps the real macOS traffic lights but lets our content
    // fill the window — the faked CSS chrome becomes the actual frame.
    titleBarStyle: "hiddenInset",
    trafficLightPosition: { x: 18, y: 20 },
    backgroundColor: "#F7F7F8",
    webPreferences: {}
  });
  const devUrl = process.env.VITE_DEV_SERVER_URL;
  if (devUrl) {
    win.loadURL(devUrl);
  } else {
    win.loadFile(path.join(RENDERER_DIST, "index.html"));
  }
}
electron.app.whenReady().then(createWindow);
electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") electron.app.quit();
  win = null;
});
electron.app.on("activate", () => {
  if (electron.BrowserWindow.getAllWindows().length === 0) createWindow();
});
