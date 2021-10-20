import React, { useContext } from 'react';
import { Usercontext } from '../context/user-context';

const WelcomePage=(props)=>{
    const {loginHandler}=useContext(Usercontext);
    const formSubmitHandler=(event)=>{
       event.preventDefault();
       loginHandler();
    }
    return<form onSubmit={formSubmitHandler}>
        <label>Username</label>
        <input />
        <label>Password</label>
        <input /><br />
        <button type="submit">Submit</button>
    </form>
}
export default WelcomePage;