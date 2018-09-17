import React from "react";
import Loadable from "react-loadable";

import LoadingState from "../../components/LoadingState";

const EditorAsync = Loadable({
  loader: () => import("./"),
  loading: LoadingState
});

export default EditorAsync;
