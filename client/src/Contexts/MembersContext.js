import React, { createContext, useState } from "react";

export const MembersContext = createContext();

const MembersContextProvider = ({ children }) => {
  const [members, setMembers] = useState([]);

  return (
    <MembersContext.Provider value={{ members, setMembers }}>
      {" "}
      {children}
    </MembersContext.Provider>
  );
};
export default MembersContextProvider;
