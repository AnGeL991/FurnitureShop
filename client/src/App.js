import React from "react";
import "normalize.css";
import "./styles/global.scss";
import { Route } from "react-router-dom";
import {AnimatedSwitch} from 'react-router-transition';
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
import Product from './components/pages/product/product';

const App = () => {
  return (
    <MainLayout>
      <AnimatedSwitch
      atEnter={{opacity:0}}
      atLeave={{opacity:0}}
    atActive={{opacity:1}}
    className ='switchWrapper'
      >
        <Route exact path="/" component={Home} />
        <Route exact path="/workshop" component={WorkShop} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/shop/product/:id" component={Product}/>
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/account" component={Login} />
        <Route exact path='/order' component={Order}/>
        <Route exact path='/payments' component={Payments}/>
        <Route path='*' component={PageNoFound} />
      </AnimatedSwitch>
    </MainLayout>
  );
};

export default App;
