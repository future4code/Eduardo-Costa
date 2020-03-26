import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import PublicIndexPage from "../PublicIndexPage/index"
import TripsChooser from '../../containers/TripsChooser/index'
import TripsDetails from '../../containers/TripsDetails/index'
import FormCandidate from '../../containers/FormCandidate/index'
import Sucess from "../../containers/Sucess/index"
import Dashboard from "../../containers/Dashboard/index"

export const routes = {
  root: "/",
  adminIndex: "/admin",
  tripList: "/trips",
  tripDetails: "/tripsdetails",
  candidate: "/candidate",
  sucess: "/sucess",
  adminDashboard: "/dashboard"
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={PublicIndexPage} />
        <Route exact path={routes.tripList} component={TripsChooser} />
        <Route exact path={routes.tripDetails} component={TripsDetails} />
        <Route exact path={routes.candidate} component={FormCandidate} />
        <Route exact path={routes.sucess} component={Sucess} />
        <Route exact path={routes.adminIndex} component={LoginPage} />
        <Route exact path={routes.adminDashboard} component={Dashboard} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
