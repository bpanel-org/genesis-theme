// Entry point for your plugin
// This should expose your plugin's modules/* START IMPORTS */
import modules from "./plugins";

/* END IMPORTS */

const plugins = Object.keys(modules).map(name => modules[name]);

/* START EXPORTS */

export const metadata = {
  name: "@bpanel/genesis-theme",
  pathName: "",
  displayName: "Genesis Theme",
  author: "bpanel-org",
  description:
    'The first theme in a chain of bPanel reference themes - "The Times 03/Jan/2009 Chancellor on brink of second bailout for banks"',
  version: require("../package.json").version
};

export const pluginConfig = { plugins };

/* END EXPORTS */
