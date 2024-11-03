const electron = require("electron");

electron.contextBridge.exposeInMainWorld("electron", {
  getHello: () => "Hello there",
});
