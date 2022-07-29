import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { UserContext } from "../Contexts/UserContext";

function Navbar() {
  const { user } = useContext(UserContext);

  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  let url = "https://carriersofhope.org.uk/about-us/";

  return (
    <>
      {!user?.isAdmin && (
        <div className="navbar-container">
          <div className="navbar">
            <h4>CARRIERS OF HOPE</h4>

            <div>
              <div className="desktopMenuBar">
                <nav>
                  <ul>
                    <li>
                      <NavLink
                        to="/"
                        activeClassName="active-link"
                        onClick={() => closeMenu()}
                        exact
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/login"
                        activeClassName="active-link"
                        onClick={() => closeMenu()}
                        exact
                      >
                        Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/products"
                        activeClassName="active-link"
                        onClick={() => closeMenu()}
                        exact
                      >
                        Online Shop
                      </NavLink>
                    </li>
                    <li>
                      <a href={url} target="_blank" rel="noreferrer noopener">
                        About Us
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="mobileMenuBar">
                <button onClick={handleToggle}>
                  {navbarOpen ? (
                    <MdClose
                      style={{ color: "#fff", width: "40px", height: "40px" }}
                    />
                  ) : (
                    <FiMenu
                      style={{
                        color: "#7b7b7b",
                        width: "40px",
                        height: "40px",
                      }}
                    />
                  )}
                </button>
                <nav>
                  <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                    <li>
                      <NavLink
                        to="/"
                        activeClassName="active-link"
                        onClick={() => closeMenu()}
                        exact
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/login"
                        activeClassName="active-link"
                        onClick={() => closeMenu()}
                        exact
                      >
                        Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/products"
                        activeClassName="active-link"
                        onClick={() => closeMenu()}
                        exact
                      >
                        Online Shop
                      </NavLink>
                    </li>
                    <li>
                      <a href={url} target="_blank" rel="noreferrer noopener">
                        About Us
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
