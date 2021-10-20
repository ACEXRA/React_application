import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loginpage from "../../pages/loginpage/Loginpage";
import Userpage from "../../pages/userpage/Userpage";
import Networkpage from "../../pages/networkpage/Networkpage";
import Homepage from "../../pages/homepage/Homepage";
import { Usercontext } from "../../context/user-context";

const Content = () => {
  const { loggedIn } = useContext(Usercontext);
  console.log(loggedIn);
  return (
    <Switch>
      <Route exact path="/login" component={Loginpage} />
      {loggedIn && (
        <>
          <Route path="/home" component={Homepage} />
          <Route path="/user" component={Userpage} />
          <Route path="/networks" component={Networkpage} />
          <Route path="/">
            <Redirect to="/home" />
          </Route>
        </>
      )}
      <Route path="/">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
};
export default Content;
