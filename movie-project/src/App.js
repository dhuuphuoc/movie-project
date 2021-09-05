import { Router, Switch} from "react-router-dom";
import { createBrowserHistory } from "history";
import { HomeTemplate } from "./template/HomeTemplate";

export const history = createBrowserHistory()
function App() {
  return (
    <Router history={history}>
      <Switch>
          <HomeTemplate/>
      </Switch>
    </Router>
  );
}

export default App;
