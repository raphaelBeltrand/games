import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import { useQuery } from "@apollo/client";
import { GET_SESSION } from "../graphql/sessionQueries";

const AppRouter = () => {
  const { data, loading, error } = useQuery(GET_SESSION, { fetchPolicy: "cache-first" });

  if (loading) return null;

  return (
    <BrowserRouter>
      <Switch location={location}>
        <Route exact path="/" component={() => <Home />} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
