import React from "react";

const date = new Date();
const year = date.getFullYear();

function Footer() {
  return (
    <footer>
      <p className="footer p">CopyrightÂ©{year}</p>
    </footer>
  );
}

export default Footer;
