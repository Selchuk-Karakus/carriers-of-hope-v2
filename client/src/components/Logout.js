import React from "react";
import { CgProfile } from "react-icons/cg";
import { logout } from "../services/authService";
import { useNavigate } from "react-router-dom";


function Logout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
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
        <button onClick={handleLogout} className="logout">
          Logout
        </button>
      </div>
    </>
  );
}

export default Logout;
