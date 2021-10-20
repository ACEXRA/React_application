import React, { useState } from 'react';

const Usercontext=React.createContext();
export {Usercontext};

const UserContextProvider=(props)=>{
    const[login,setLogin]=useState(false);
    const loginHandler=()=>{
        return setLogin(()=>{return true});
    }
    return<Usercontext.Provider value={{
        login,
        loginHandler,
    }}>
        {props.children}
    </Usercontext.Provider>
}

export default UserContextProvider;
