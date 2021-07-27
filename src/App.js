import "./App.css";
import { Route, Switch } from "react-router-dom";
import Landing from "./containers/Landing";
import Layout from "./components/Layout/Layout";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Layout />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </div>
  );
}

export default App;
