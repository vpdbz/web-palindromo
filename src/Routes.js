import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./screens/home/Home";
import NotFound from "./screens/notFound/NotFound";
import Error from "./screens/error/Error";
import routes from './constants/routes'

export default function Routes() {
  return (
    <Switch>
      <Route exact path={routes.home} component={Home} />
      <Route exact path={routes.error} component={Error} />
      {/* Finally, catch all unmatched routes */}
      <Route component={NotFound} />
    </Switch>
  );
}
