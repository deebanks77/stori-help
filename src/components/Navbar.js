import React, { useState } from "react";
import { Link } from "react-router-dom";
import { storiLogo } from "./images";
import { FiSettings } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleHamburger = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <section className="section nav-section">
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={storiLogo} alt="xcod" />
          </Link>
        </div>
        <ul className="nav-list">
          <li>
            <Link to="/article">Top article</Link>{" "}
          </li>
          <li>
            <Link to="/faq">FAQs</Link>{" "}
          </li>
          <li>
            <Link to="/contact-support">Contact support</Link>{" "}
          </li>
          <li>
            <Link to="/learn">Learn</Link>{" "}
          </li>
        </ul>
        <div className="nav-setting">
          <Link to="/settings">
            <FiSettings className="setting-icon" />
          </Link>

          <a
            href="https://app.storiapp.io/auth/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">create a stori</button>
          </a>
        </div>
        <RxHamburgerMenu
          onClick={handleHamburger}
          className={`hamburger ${show ? "show" : ""}`}
        />
      </nav>

      <div className={`hamburgerNav ${show ? "" : "closeHamburgerNav"} `}>
        <FaTimes onClick={handleClose} className={`closeNav `} />

        <ul className="hamburgerNavlist">
          <li className="">
            <Link to="/article">Top article</Link>{" "}
          </li>
          <li className="">
            <Link to="/faq">FAQs</Link>{" "}
          </li>
          <li className="">
            <Link to="/article">Contact Support</Link>{" "}
          </li>
          <li className="">
            <Link to="/article">Learn</Link>{" "}
          </li>
        </ul>

        <div className="hamburgerNav-setting">
          <Link to="/settings">
            <FiSettings className="setting-icon" />
          </Link>

          <a
            href="https://app.storiapp.io/auth/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="button">create a stori</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
