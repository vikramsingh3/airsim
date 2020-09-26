import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Home from "./containers/Home/Home";
import Prepaid from "./containers/Prepaid/Prepaid";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation></Navigation>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/prepaid" exact component={Prepaid}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
