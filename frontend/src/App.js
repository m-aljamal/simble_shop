import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingBage from "./components/pages/LandingBage";
import setAuthToken from "./components/utils/setAuthToken";
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth_actions";
import "antd/dist/antd.css";
import { getProducts } from "./actions/products_actions";
import Product from "./components/pages/Product";
import Dashboard from "./components/pages/Dashboard";
if (localStorage.token) {
  setAuthToken(localStorage);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
    store.dispatch(getProducts());
  }, []);

  return (
    <div className="app">
      <Provider store={store}>
        <Layout>
          <Switch>
            <Route exact path="/" component={LandingBage} />
            <Route exact path="/admin/dashboard" component={Dashboard} />
            <Route exact path="/product/:id" component={Product} />
          </Switch>
        </Layout>
      </Provider>
    </div>
  );
}

export default App;
