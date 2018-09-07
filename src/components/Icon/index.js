import FontAwesome from "react-fontawesome";
import React from "react";

import Link from "./Link";

/**
 * Renders a font-awesome based icon that's a link!
 *
 * @param {IconProps} props
 * @returns
 */
export default function Icon(props) {
  return (
    <Link target="_blank" href={props.href}>
      <FontAwesome name={props.name} />
    </Link>
  );
}
