import _ from "lodash";
import base from "./base";

/**
 * Cobalt Theme
 */
const cobalt = {
  header: {
    background: "#00223E",
  },
  editor: {
    theme: "cobalt",
  },
  preview: {
    background: "HSL(207.1, 100%, 12.2%)",
  },
};

export default _.merge({}, base, cobalt);
