import { Link } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";

const Header = () => {
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

        <nav>
          <ul className="header__nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
