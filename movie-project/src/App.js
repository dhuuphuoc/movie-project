import { Router, Switch} from "react-router-dom";
import { createBrowserHistory } from "history";
import { HomeTemplate } from "./template/HomeTemplate";
import Home from "./pages/Home";
import { UserTemplate } from "./template/UserTemplate";
import Register from "./pages/Register";
import Signin from "./pages/Signin";

export const history = createBrowserHistory()
function App() {
  return (
    <Router history={history}>
      <Switch>
          <HomeTemplate path="/home" exact Component={Home}/>
          <HomeTemplate path="/" exact Component={Home}/>

          <UserTemplate path="/register" exact Component={Register}/>
          <UserTemplate path="/signin" exact Component={Signin}/>
          <UserTemplate/>
      </Switch>
    </Router>
  );
}

export default App;
