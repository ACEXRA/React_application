import React, { useState } from "react";

export const Usercontext = React.createContext();

const UserContextProvider = (props) => {
  const initial_arr = [
    {
      id: "0",
      username: "Rasheed",
      password: "12345",
      role: "super-admin",
      status: "active",
    },
  ];

  const [data, setData] = useState(initial_arr);
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Usercontext.Provider value={{ loggedIn, setLoggedIn, setData, data }}>
      {props.children}
    </Usercontext.Provider>
  );
};

export default UserContextProvider;
