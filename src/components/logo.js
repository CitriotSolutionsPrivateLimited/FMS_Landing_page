import React from "react";
import { logo, logoMobile } from "./constants";

class Logo extends React.Component {
  render() {
    const isMobile = window.innerWidth <= 767; // Adjust the breakpoint as needed
    const src = isMobile ? logoMobile : logo;

    return (
      <img
        src={src}
        alt="VIZONAI"
        style={isMobile ? { width: "30%", height: "auto" } : { width: "50%", height: "auto" }}
      />
    );
  }
}

export default Logo;
