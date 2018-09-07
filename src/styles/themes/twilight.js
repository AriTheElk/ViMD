import _ from "lodash";
import base from "./base";

/**
 * Twilight Theme
 */
const twilight = {
  header: {
    background: "#1D1F21",
  },
  editor: {
    theme: "twilight",
  },
};

export default _.merge({}, base, twilight);
