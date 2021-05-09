import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Home from "./containers/Home/Home";
import _404 from "./containers/404/_404";
import PrepaidPlans from "./containers/Prepaid/PrepaidPlans/PrepaidPlans";
import PrepaidRecharge from "./containers/Prepaid/PrepaidRecharge/PrepaidRecharge";
import PrepaidRechargeNew from "./containers/Prepaid/PrepaidRecharge/PrepaidRechargeNew";
import PrepaidNewConnection from "./containers/Prepaid/PrepaidNewConnection/PrepaidNewConnection";
import PostpaidRecharge from "./containers/Postpaid/PostpaidRecharge/PostpaidRecharge";
import PostpaidPlans from "./containers/Postpaid/PostpaidPlans/PostpaidPlans";
import PostpaidNewConnection from "./containers/Postpaid/PostpaidNewConnection/PostpaidNewConnection";
import VideoParallax from "./components/VideoParallax/VideoParallax";

class App extends Component {
  componentDidMount() {
    // Optimize activate after App mounts
    window.dataLayer.push({ event: "optimize.activate" });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation></Navigation>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/prepaid" exact>
              <Redirect to="/prepaid/new"></Redirect>
            </Route>
            <Route path="/prepaid/plans" component={PrepaidPlans}></Route>
            <Route path="/prepaid/recharge" component={PrepaidRecharge}></Route>
            <Route
              path="/prepaid/recharge-new"
              component={PrepaidRechargeNew}
            ></Route>
            <Route path="/prepaid/new" component={PrepaidNewConnection}></Route>
            <Route path="/postpaid" exact>
              <Redirect to="/postpaid/new"></Redirect>
            </Route>
            <Route path="/postpaid/plans" component={PostpaidPlans}></Route>
            <Route
              path="/postpaid/recharge"
              component={PostpaidRecharge}
            ></Route>
            <Route
              path="/postpaid/new"
              component={PostpaidNewConnection}
            ></Route>
            <Route path="/video" component={VideoParallax}></Route>
            <Route component={_404}></Route>
          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    );
  }
}

export default App;
