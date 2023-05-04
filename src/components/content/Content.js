import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loginpage from "../../pages/loginpage/Loginpage";
import Userpage from "../../pages/userpage/Userpage";
import Homepage from "../../pages/homepage/Homepage";
import { Usercontext } from "../../context/user-context";
import BG from "../../assets/images/background.jpg";

const Content = () => {
  const { loggedIn, userLogged } = useContext(Usercontext);
  return (
    <div className="content">
      <img src={BG} alt="bg" />
      <Switch>
        <Route path="/login" component={Loginpage} />
        {loggedIn && (
          <>
            <Route path="/home" component={Homepage} />
            {userLogged.role !== "Student" && (
              <Route path="/user" component={Userpage} />
            )}
            <Route path="/">
              <Redirect to="/home" />
            </Route>
          </>
        )}
        <Route path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </div>
  );
};
export default Content;
