import React from "react";
import styled, { keyframes } from "styled-components";

import List from "./List";
import ListItem from "./ListItem";

export default function ButtonGroup(props) {
  let children = [];
  props.buttons.forEach((element, index, all) => {
    children.push(<ListItem key={index}>{element}</ListItem>);
  });
  return <List {...props}>{children}</List>;
}
