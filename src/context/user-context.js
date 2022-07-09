import React, { useState } from "react";
import { initialData } from "../misc/DummyData";

export const Usercontext = React.createContext();

const UserContextProvider = (props) => {
  const [data, setData] = useState(initialData);
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <Usercontext.Provider value={{ loggedIn, setLoggedIn, setData, data }}>
      {props.children}
    </Usercontext.Provider>
  );
};

export default UserContextProvider;
