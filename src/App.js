import "./App.css";
import { Route, Switch } from "react-router-dom";
import Landing from "./containers/Landing";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout />
      <Switch>
        
        <Landing />
        <Route exact path="/" component={Landing} />
      </Switch>
    </div>
  );
}

export default App;
