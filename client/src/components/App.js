import React, { useEffect } from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import LandingPage from "./Landing_Components/LandingPage";
import Signin from "./Auth_Components/Signin";
import Signup from "./Auth_Components/Signup";
import Dashboard from "./Dashboard_Components/Dashboard";
import * as actions from "../actions";
import PaymentModal from "./Dashboard_Components/PaymentModal"
import Licenses from './Dashboard_Components/Licences'
import history from "../history"



const App = ({ fetchUser }) => {

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <div>
      <Router history={history}>
        <Route path="/" exact component={LandingPage} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
          <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/licenses" exact component={Licenses} />
        <Route path="/payment" exact component={PaymentModal} />
      </Router>
    </div>
  );
};

export default connect(null, actions)(App);
