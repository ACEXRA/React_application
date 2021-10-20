import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import WelcomePage from "./Pages/WelcomePage";
import Userpage from "./Pages/Userpage";
import { Usercontext } from "./context/user-context";
import { Redirect, Route, Switch } from "react-router-dom";



function App() {
  const Ctx=useContext(Usercontext);
  console.log(Ctx);

  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/home" exact>
          <WelcomePage/>
        </Route>
       {Ctx.login && <Route path="/home/user">
          <Userpage />
        </Route>}
        {!Ctx.login && <Route path="/">
          <Redirect to="/home"/>
        </Route>}
      </Switch>
    </div>
  );
}

export default App;
