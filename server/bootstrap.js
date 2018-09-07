require("ignore-styles");

require("babel-register")({
  ignore: [/(node_modules)/],
  presets: ["es2015", "react-app"],
});

// TODO: Figure out a better way to polyfill window in node
if (typeof window === "undefined") {
  global.window = {};
}

require("./index");
