import React, { useEffect } from "react";
import styled from "styled-components";
import ProductLanding from "./ProductLanding";
import PageLinks from "../PageLinks";
import { useSelector, useDispatch } from "react-redux";
import { getProductsByType } from "../../actions/products_actions";
const ProductPage = ({ match }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductsByType(match.params.type));
  }, [dispatch, match.params.type]);

  const state = useSelector(
    ({ product_reucer: { productsByType, loading } }) => {
      return { productsByType, loading };
    }
  );
  const { loading, productsByType } = state;

 
    return (
      <LandingStyle>
        <div className="productsContainer">
          <div className="links">
            <PageLinks />
          </div>
          <div className="products">
            {!loading && productsByType.length !== 0 ? (
              <>
                <h3>{productsByType[0].type}</h3>
                <div className="productsRows">
                  {productsByType.map((product) => (
                    <ProductLanding key={product.id} product={product} />
                  ))}
                </div>
              </>
            ) : (
              !loading &&
              productsByType.length === 0 && <div>No data found</div>
            )}
          </div>
        </div>

        <hr />
      </LandingStyle>
    );

};

const LandingStyle = styled.div`
  .productsContainer {
    display: flex;
    .links {
      width: 20%;
    }
    .products {
      width: 80%;
    }
    .productsRows {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  .info {
    display: flex;
    .footerLinks {
      width: 35%;
    }
    .subscribe {
      width: 65%;
    }
  }
`;
export default ProductPage;
