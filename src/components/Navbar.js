import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { HamburgetMenuClose, HamburgetMenuOpen } from "./Icons";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);


  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src ={ require=('./images/nammagundlupete.png')} width={90} height={90} />
            {/* <span>Namma Gundlupete <br/> </span> */}
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/knowme"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Know Me !!
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/destinations"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Destinations
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/hotels"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Hotels
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <HamburgetMenuClose />{" "}
              </span>
            ) : (
              <span className="icon">
                <HamburgetMenuOpen />
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
