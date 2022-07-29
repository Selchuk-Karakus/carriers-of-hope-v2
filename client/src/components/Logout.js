import React, { useContext } from "react";
import { CgProfile } from "react-icons/cg";
import { logout } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";


function Logout() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    setUser({isAdmin: false})
    navigate('/');
  }

  return (
    <>
      <div>
        <div className="admin-profile">
          <h1>Admin name</h1>
          <span className="profile-icon">
            <CgProfile />
          </span>
        </div>
        <div className="logout">
          <a href="/" className="logout-btn" onClick={handleLogout}>
            Logout
          </a>
        </div>
      </div>
    </>
  );
}

export default Logout;
