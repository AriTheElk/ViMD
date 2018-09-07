import _ from "lodash";
import base from "./base";

/**
 * Tomorrow Night Theme
 */
const tomorrow_night = {
  header: {
    background: "#1D1F21",
  },
  editor: {
    theme: "tomorrow_night",
  },
};

export default _.merge({}, base, tomorrow_night);
