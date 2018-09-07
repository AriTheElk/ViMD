import React from "react";
import Grid from "hedron";

import Brand from "./Brand";
import Button from "./Button";
import Navigation from "./Navigation";
import Dropdown from "./Dropdown";
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
    <a href="https://github.com/garetmckinley/vimd/issues" target="_blank">
      <Button key="github">Report Issue</Button>
    </a>,
    <a href="https://github.com/garetmckinley/vimd" target="_blank">
      <Button key="github">GitHub</Button>
    </a>,
    <Button key="save" onClick={props.onSave}>
      Download
    </Button>,
  ];
  return (
    <Wrapper padding="10px" valign="center">
      <Grid.Bounds valign="center" width="50%">
        <Grid.Box fluid>
          <Brand>
            Vi
            <b>MD</b>
          </Brand>
        </Grid.Box>
        <Grid.Box fluid shiftRight>
          <Dropdown
            options={props.themes}
            value={props.activeTheme}
            onChange={props.onThemeChange}
          />
        </Grid.Box>
      </Grid.Bounds>
      <Grid.Box shiftRight fluid>
        <Navigation buttons={buttons} />
      </Grid.Box>
    </Wrapper>
  );
}
