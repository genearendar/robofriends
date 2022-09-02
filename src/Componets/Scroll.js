import React from "react";
import "../CSS/scroll.css";

export default function Scroll(props) {
  return <div className="scroll-container">{props.children}</div>;
}
