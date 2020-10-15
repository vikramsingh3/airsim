import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Home from "./containers/Home/Home";
import _404 from "./containers/404/_404";
import Prepaid from "./containers/Prepaid/Prepaid";
import PrepaidPlans from "./containers/Prepaid/PrepaidPlans/PrepaidPlans";
import PrepaidRecharge from "./containers/Prepaid/PrepaidRecharge/PrepaidRecharge";
import Postpaid from "./containers/Postpaid/Postpaid";
import PostpaidRecharge from "./containers/Postpaid/PostpaidRecharge/PostpaidRecharge";
import PostpaidPlans from "./containers/Postpaid/PostpaidPlans/PostpaidPlans";
function App() {
  return (
    <Router>
      <div className="App">
        <Navigation></Navigation>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/prepaid" exact component={Prepaid}></Route>
          <Route path="/prepaid/plans" component={PrepaidPlans}></Route>
          <Route path="/prepaid/recharge" component={PrepaidRecharge}></Route>
          <Route path="/postpaid" exact component={Postpaid}></Route>
          <Route path="/postpaid/plans" component={PostpaidPlans}></Route>
          <Route path="/postpaid/recharge" component={PostpaidRecharge}></Route>
          <Route component={_404}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
