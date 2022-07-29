import React from "react";
import { CgProfile } from "react-icons/cg";

function Logout() {
  return (
    <>
      <div>
        <div className="admin-profile">
          <h1>Admin name</h1>
          <span className="profile-icon">
            <CgProfile />
          </span>
        </div>
        <div className="logout">Logout</div>
      </div>
    </>
  );
}

export default Logout;
