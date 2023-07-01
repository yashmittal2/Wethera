import React from "react";

function Header() {
  return (
    <div style={{ padding: "10px" }}>
      <h1
        style={{
          color: "#0564A4",
          fontFamily: "sans-serif",
          fontWeight: "bolder",
          fontSize: "65px",
          margin: "0",
        }}
      >
        Wethera
      </h1>
      <p
        style={{
          color: "#0E97F3",
          fontSize: "18px",
          fontFamily: "sans-serif",
          fontWeight: "bolder",
          margin: "0",
          paddingTop: "-2px",
        }}
      >
        Get current weather for any city
      </p>
    </div>
  );
}

export default Header;



