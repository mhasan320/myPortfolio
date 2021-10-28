import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Pages/Home";
import PortfolioPage from "../Pages/PortfolioPage";
import "./FontawsomeIcons";
import Layout from "./Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/PortfolioPage" component={PortfolioPage} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
