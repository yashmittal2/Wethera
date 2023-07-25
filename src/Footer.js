import React from "react";
import "./css/Footer.css";

function Footer() {
  return (
    <footer className="foo">
      <span style={{ color: "black", fontWeight: "bold" }}> Made by</span> {""}{" "}
      <a
        href="https://www.linkedin.com/in/yashmittalhere/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Yash Mittal
      </a>
    </footer>
  );
}

export default Footer;
