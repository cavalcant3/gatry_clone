import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PagesPromotionSearch from "./Promotion/search/Search";
import PagesPromotionForm from "./Promotion/Form/Form";

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route patch="/create" component={PagesPromotionForm} />
        <Route patch="/edit/:id" component={PagesPromotionForm} />
        <Route patch="/" component={PagesPromotionSearch} />
      </Switch>
    </Router>
  );
};

export default Root;
