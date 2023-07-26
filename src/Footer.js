import React from "react";
import "./css/Footer.css";

function Footer() {

  return (
   
      <div className="foo">
        <span style={{ color: "black", fontWeight: "bold" }}> Made by</span>{" "}
        {""}{" "}
        <a
          href="https://www.linkedin.com/in/yashmittalhere/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yash Mittal
        </a>
      </div>
    
  );
}

export default Footer;
