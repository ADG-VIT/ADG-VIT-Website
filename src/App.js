import "./App.css";
import { Route, Switch } from "react-router-dom";
import Landing from "./containers/Landing";
import Layout from "./components/Layout/Layout";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Layout />
      <Switch>
        
        <Landing />
        <Route exact path="/" component={Landing} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
