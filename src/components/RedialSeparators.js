import React from "react";
import _ from "lodash";

function Separator(props) {
  return (
    <div
      style={{
        position: "absolute",
        height: "100%",
        transform: `rotate(${props.turns}turn)`
      }}
    >
      <div style={props.style} />
    </div>
  );
}

export default function RadialSeparators (props)  {
  const turns = 1 / props.count;
  return _.range(props.count).map(index => (
    <Separator turns={index * turns} style={props.style} />
  ));
}

export function GradientSVG() {
  const idCSS = "hello";
  const gradientTransform = `rotate(90)`;
  return (
    <svg style={{ height: 0 }}>
      <defs>
        <linearGradient id={idCSS} gradientTransform={gradientTransform}>
          <stop offset="16.29%" stopColor="#32C5FF" />
          <stop offset="85.56%" stopColor="#B620E0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
