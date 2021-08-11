import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./containers/Landing";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";
import ProjectList from "./components/Projects/ProjectList";
import Domain from "./components/Domains/Domain";
import { FullTeams } from "./components/Teams/Teams";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/projects/" component={ProjectList} />
          <Route exact path="/domains/" component={Domain} />
          <Route exact path="/team/" component={FullTeams} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
