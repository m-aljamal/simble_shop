import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingBage from "./components/pages/LandingBage";
import setAuthToken from "./components/utils/setAuthToken";
import { loadUser } from "./actions/auth_actions";
import "antd/dist/antd.css";
import { getProducts } from "./actions/products_actions";
import Product from "./components/pages/Product";
import Dashboard from "./components/pages/Dashboard";
import { useDispatch } from "react-redux";
import ProductPage from "./components/pages/ProductPage";

if (localStorage.token) {
  setAuthToken(localStorage);
}

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
    dispatch(getProducts());
  }, []);

  return (
    <div className="app">
      <Layout>
        <Switch>
          <Route exact path="/" component={LandingBage} />
          <Route exact path="/collections/:type" component={ProductPage} />
          <Route exact path="/admin/dashboard" component={Dashboard} />
          <Route exact path="/product/:id" component={Product} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
