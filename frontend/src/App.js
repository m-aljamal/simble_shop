import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Layout from "./components/Layout";
import setAuthToken from "./components/utils/setAuthToken";
import { loadUser } from "./actions/auth_actions";
import "antd/dist/antd.css";
import { getProducts } from "./actions/products_actions";
import Product from "./components/pages/Product";
import Dashboard from "./components/pages/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import ProductsPage from "./components/pages/ProductsPage";
if (localStorage.token) {
  setAuthToken(localStorage);
}

function App() {
  const dispatch = useDispatch();
  const match = useRouteMatch("/collections/:type");
  

  useEffect(() => {
    dispatch(loadUser());
    dispatch(getProducts());
  }, []);
  const findProductByType = useSelector(
    ({ product_reucer: { products, loading } }) => {

      if (match) {

        return {
          products: products.filter(
            (product) => product.type === match.params.type
          ),
          loading,
        }
      }else{
        return{
          products: products.filter(product => product.type === 'featured collection')
        }
      }
    }
  );

  return (
    <div className="app">
      <Layout>
        <Switch>
          <Route exact path="/" >
          <ProductsPage products={findProductByType} home/>
          </Route>
          <Route exact path="/collections/:type" >
            <ProductsPage products={findProductByType}/>
          </Route>
          <Route exact path="/admin/dashboard" component={Dashboard} />
          <Route exact path="/product/:id" component={Product} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
