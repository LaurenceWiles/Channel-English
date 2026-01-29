import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import "../styles/Header.css";
import logo2 from "../assets/logo2.png";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header>
      <div className="header__container">
        <Link to="/" className="header__logo-link">
          <img
            src={logo2}
            alt="Channel English Logo"
            className="header__logo"
          />
        </Link>

        <button
          ref={buttonRef}
          className="header__burger"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="primary-navigation"
        >
          <svg
            className="header__burger-icon"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            {isMobileMenuOpen ? (
              // X / close icon
              <path
                d="M6 6l12 12M18 6L6 18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              // hamburger icon
              <path
                d="M4 6h16M4 12h16M4 18h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>

        <HeaderNav
          isOpen={isMobileMenuOpen}
          navRef={navRef}
          onLinkClick={() => setMobileMenuOpen(false)}
        />
      </div>
    </header>
  );
};

export default Header;
