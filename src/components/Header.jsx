import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
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

        <nav
          ref={navRef}
          className={`header__nav ${isMobileMenuOpen ? "open" : ""}`}
        >
          <ul>
            <li>
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
