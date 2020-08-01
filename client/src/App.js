import React from "react";
import "normalize.css";
import "./styles/global.scss";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/home/home";
import PageNoFound from "./components/pages/pageNoFound/pageNoFound";
import MainLayout from "./components/layout/mainLayout/mainLayout";
import WorkShop from "./components/pages/workShop/workShop";
import Shop from "./components/pages/shop/shop";
import Contact from "./components/pages/contact/contact";
import Login from "./components/pages/login/login";
import Blog from "./components/pages/blog/blog";
import Order from './components/pages/order/order';
import Payments from "./components/pages/payments/payments";

const App = () => {
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/workshop" component={WorkShop} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/realization" component={Home} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/account" component={Login} />
        <Route exact path='/order' component={Order}/>
        <Route exact path='/payments' component={Payments}/>
        <Route exact component={PageNoFound} />
      </Switch>
    </MainLayout>
  );
};

export default App;
