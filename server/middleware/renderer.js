import React from "react";
import ReactDOMServer from "react-dom/server";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

// import our main App component
import App from "../../src/App";

const path = require("path");
const fs = require("fs");

export default (req, res, next) => {
  // point to the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, "..", "..", "build", "index.html");

  fs.readFile(filePath, "utf8", (err, htmlData) => {
    if (err) {
      console.error("err", err);
      return res.status(404).end();
    }

    const sheet = new ServerStyleSheet();

    // render the app as a string
    const html = ReactDOMServer.renderToString(
      <StyleSheetManager sheet={sheet.instance}>
        <App />
      </StyleSheetManager>
    );

    const styleTags = sheet.getStyleTags();

    // inject the rendered app into our html and send it
    return res.send(
      htmlData.replace(
        '<div id="root"></div>',
        `${styleTags}<div id="root">${html}</div>`
      )
    );
  });
};
