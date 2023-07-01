import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        padding: "20px 0",
      }}
    >
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
};

export default Footer;
