import React from "react";
import Navbar from "./components/UI/Navbar";
import Loginpage from "./pages/loginpage/Loginpage";
import Userpage from "./pages/userpage/Userpage";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/login" component={Loginpage} />
        <Route path="/user" component={Userpage} />
      </Switch>
    </div>
  );
}

export default App;
