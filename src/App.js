import "./App.css";
import { Route, Switch } from "react-router-dom";
import Landing from "./containers/Landing";
import Layout from "./components/Layout/Layout";
import EventsPage from "./components/EventsPage";
function App() {
  return (
    <div className="App">
      <Switch>
        <Layout />
        <Route exact path="/" component={Landing} />
        <Route exact path="/events" component={EventsPage} />
      </Switch>
    </div>
  );
}

export default App;
