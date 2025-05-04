import path from "path";
import { app } from "electron";
import { isDevelopment } from "./util.js";

export function getPreloadPath() {
  return path.join(app.getAppPath(), isDevelopment() ? "." : "..", "/dist-electron/preload.cjs");
}
