import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import HeaderNav from "./HeaderNav";
import "../styles/Header.css";
import logo2 from "../assets/logo2.png";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
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
          className="header__burger"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          &#9776;
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
