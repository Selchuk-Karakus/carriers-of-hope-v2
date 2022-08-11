import React, { useContext } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { FaShoppingBasket } from "react-icons/fa";
import { UserContext } from "../Contexts/UserContext";
import { logout } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { user, setUser} = useContext(UserContext);
  const navigate = useNavigate();

  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  const handleLogout = () => {
    logout();
    setUser({ isLoggedIn: false, isAdmin: false });
    navigate("/");
    closeMenu();
  }

  const handleBasketClick = () => {
    navigate("/cart");
  }

  let url = "https://carriersofhope.org.uk/about-us/";

  return (
    <>
      {!user?.isAdmin && (
        <div className="navbar-container">
          <div className="navbar">
            <div className="desktopMenuBar">
              <div className="menubar">
                <h4>CARRIERS OF HOPE</h4>
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
              <div className="login-logout">
                <ul>
                  {user.isLoggedIn && (
                    <li>
                      <a
                        href="/"
                        activeClassName="active-link"
                        onClick={() => handleLogout()}
                        exact
                      >
                        Logout
                      </a>
                    </li>
                  )}
                  {!user.isLoggedIn && (
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
                  )}
                </ul>
              </div>

              <div className="cart-icon">
                <ul>
                  <li class="nav-item">
                    <span onClick={() => { navigate("/cart"); }} class="icon"  >
                      <FaShoppingBasket />
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mobileMenuBar">
              <h4>CARRIERS OF HOPE</h4>

              <div className="hamburger-section">
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
                    {user.isLoggedIn && (
                      <li>
                        <a
                          href="/"
                          activeClassName="active-link"
                          onClick={() => handleLogout()}
                          exact
                        >
                          Logout
                        </a>
                      </li>
                    )}
                    {!user.isLoggedIn && (
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
                    )}
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
                    <li>
                      <NavLink
                        to="/cart"
                        activeClassName="active-link"
                        onClick={() => closeMenu()}
                        exact
                      >
                        Cart
                      </NavLink>
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
