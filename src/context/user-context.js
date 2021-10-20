import React from "react";

export const Usercontext = React.createContext();

const UserContextProvider = (props) => {
  return <Usercontext.Provider>{props.children}</Usercontext.Provider>;
};

export default UserContextProvider;
