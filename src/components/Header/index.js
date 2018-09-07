import React from "react";
import Grid from "hedron";

import Brand from "./Brand";
import Button from "./Button";
import Navigation from "./Navigation";
import Link from "../Icon/Link";
import Wrapper from "./Wrapper";

/**
 * The `Header` component is responsible for rendering the top bar
 * with the brand name and menu navigation. The background color
 * and height can be set from within the `base.js` theme file.
 *
 * @param {Object} props
 * @returns React.node
 */
export default function Header(props) {
  const buttons = [
    <a href="https://github.com/garetmckinley/vimd" target="_blank">
      <Button key="github">GitHub</Button>
    </a>,
    <Button key="save" onClick={props.onSave}>
      Download
    </Button>,
  ];
  return (
    <Wrapper padding="10px" valign="center">
      <Grid.Box fluid>
        <Brand>
          Vi
          <b>MD</b>
        </Brand>
      </Grid.Box>
      <Grid.Box shiftRight fluid>
        <Navigation buttons={buttons} />
      </Grid.Box>
    </Wrapper>
  );
}
