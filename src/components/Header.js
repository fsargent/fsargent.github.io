import PropTypes from "prop-types";
import React from "react";
import felixthecat from "../assets/favicons/android-chrome-192x192.png";

const Header = (props) => (
  <header id="header" style={props.timeout ? { display: "none" } : {}}>
    <div className="logo">
      {/* <span className="image fit">
        <img src={felixthecat} alt="" />
      </span> */}
      {/* <span className="icon fa-diamond"></span> */}
    </div>
    <div className="content">
      <div className="inner">
        <h1>Felix Sargent</h1>
        <p>Product & Engineering Management</p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle("intro");
            }}
          >
            Projects
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle("work");
            }}
          >
            Work
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle("about");
            }}
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              props.onOpenArticle("contact");
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
};

export default Header;
