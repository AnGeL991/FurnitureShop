import React from "react";
import 'normalize.css';
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/home/home";
import PageNoFound from "./components/pages/pageNoFound/pageNoFound";
import MainLayout from "./components/layout/mainLayout/mainLayout";
const App = () => {
  return (
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact component={PageNoFound} />
      </Switch>
    </MainLayout>
  );
};

export default App;
