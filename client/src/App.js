import React from "react";
import "normalize.css";
import "./styles/global.scss";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/home/home";
import PageNoFound from "./components/pages/pageNoFound/pageNoFound";
import MainLayout from "./components/layout/mainLayout/mainLayout";
import WorkShop from "./components/pages/workShop/workShop";
import Shop from './components/pages/shop/shop';

const App = () => {
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/workshop" component={WorkShop} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/realization" component={Home} />
        <Route exact path="/blog" component={Home} />
        <Route exact path="/contact" component={Home} />
        <Route exact path="/account" component={Shop} />
        <Route exact component={PageNoFound} />
      </Switch>
    </MainLayout>
  );
};

export default App;
