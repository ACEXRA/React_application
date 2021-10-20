import React, { useState } from "react";

export const Usercontext = React.createContext();

const UserContextProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Usercontext.Provider value={{ loggedIn, setLoggedIn }}>
      {props.children}
    </Usercontext.Provider>
  );
};

export default UserContextProvider;
