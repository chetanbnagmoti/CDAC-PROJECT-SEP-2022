import React from "react";

/**
 * @author Bhavesh
 * This component renders Footer
 */
function Footer() {
  return (
    <div style={footerStyle.pos}>
      <nav className="navbar navbar-dark" style={footerStyle.bg}>
        <div className="container-fluid">
          <span className="navbar-text">
            Copyright © All rights reserved BookMyFlight.com, 2023.
          </span>
        </div>
      </nav>
    </div>
  );
}

let footerStyle = {
  pos: {
    position: "relative",
  },
  bg: {
    background: "#00001a",
  },
};

export default Footer;
