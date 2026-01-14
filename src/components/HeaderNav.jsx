import { Link } from "react-router-dom";

const HeaderNav = ({ isOpen, onLinkClick, navRef }) => {
  return (
    <nav ref={navRef} className={`header__nav ${isOpen ? "open" : ""}`}>
      <ul>
        <li>
          <Link to="/" onClick={onLinkClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={onLinkClick}>
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" onClick={onLinkClick}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
