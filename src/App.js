import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Createacc from "./pages/createacc/Createacc";
import { BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
function App(){
  const { user } = useContext(AuthContext);

  return (
    <Router>
    <Switch>
      <Route exact path="/">
        {user ? <Home /> : <Createacc />}
      </Route>
      <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
      <Route path="/createacc">
        {!user ? <Redirect to="/" /> : <Createacc />}
      </Route>
      <Route path="/profile/:username">
        <Profile />
      </Route>
    </Switch>
  </Router>
);
}

export default App;
