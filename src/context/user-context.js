import React, { useState } from "react";
import { initialData } from "../misc/DummyData";

export const Usercontext = React.createContext();

const UserContextProvider = (props) => {
  const [data, setData] = useState(initialData);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userLogged, setUserLogged] = useState({});
  return (
    <Usercontext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        setData,
        data,
        setUserLogged,
        userLogged,
      }}
    >
      {props.children}
    </Usercontext.Provider>
  );
};

export default UserContextProvider;
