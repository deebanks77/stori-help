import React, { useState } from "react";
import { Link } from "react-router-dom";
import { storiLogo } from "./images";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";

function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  window.addEventListener("click", function (event) {
    if (event.target.classList.contains("hamburger")) {
      setShow(true);
      return;
    } else {
      setShow(false);
      return;
    }
  });

  const handleHamburger = () => {
    setShow(true);
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

      <div
        className={`hamburgerNav ${show ? "" : "closeHamburgerNav"} `}
        // onClick={handleClose}
      >
        <FaTimes onClick={handleClose} className={`closeNav `} />

        <ul className="hamburgerNavlist">
          <li className="nav-btn" onClick={handleClose}>
            <Link to="/article">Top article</Link>{" "}
          </li>
          <li className="nav-btn" onClick={handleClose}>
            <Link to="/faq">FAQs</Link>{" "}
          </li>
          <li className="nav-btn" onClick={handleClose}>
            <Link to="/article">Contact Support</Link>{" "}
          </li>
          <li className="nav-btn" onClick={handleClose}>
            <Link to="/article">Learn</Link>{" "}
          </li>
        </ul>

        <div className="hamburgerNav-setting">
          <a
            href="https://app.storiapp.io/auth/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button onClick={handleClose} className="button nav-btn">
              create a stori
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
