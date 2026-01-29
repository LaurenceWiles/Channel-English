import { NavLink } from "react-router-dom";

const HeaderNav = ({ isOpen, onLinkClick, navRef }) => {
  return (
    <nav
      id="primary-navigation"
      ref={navRef}
      className={`header__nav ${isOpen ? "open" : ""}`}
      aria-label="Primary navigation"
    >
      <ul>
        <li>
          <NavLink
            to="/"
            onClick={onLinkClick}
            className={({ isActive }) =>
              isActive ? "header__link active" : "header__link"
            }
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={onLinkClick}
            className={({ isActive }) =>
              isActive ? "header__link active" : "header__link"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={onLinkClick}
            className={({ isActive }) =>
              isActive ? "header__link active" : "header__link"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
