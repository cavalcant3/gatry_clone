import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PagesPromotionSearch from "./Promotion/search/Search";
import PagesPromotionForm from "./Promotion/Form/Form";

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route patch="/" component={PagesPromotionSearch} />
        <Route patch="/create" component={PagesPromotionForm} />
        <Route patch="/edit/:id" component={PagesPromotionForm} />
      </Switch>
    </Router>
  );
};

export default Root;
