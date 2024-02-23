import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import Tracking from "./components/ParcelsPage";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginForm} />
      <Route exact path="/" component={Home} />
      <Route exact path="/parcels" component={Tracking} />
    </Switch>
  </BrowserRouter>
);

export default App;
