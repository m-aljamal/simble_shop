import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import ProductLanding from "./ProductLanding";
import PageLinks from "../PageLinks";
const LandingBage = () => {
  const state = useSelector(({ product_reucer }) => product_reucer);

  return (
    <LandingStyle>
      <div className="productsContainer">
        <div className="links">
          <PageLinks />
        </div>
        <div className="products">
          <h3>Featured Collection</h3>
          <div className="productsRows">
            {state.loading && state.products ? (
              <h2>Loading....</h2>
            ) : (
              state.products.map((pro) => (
                <ProductLanding key={pro.id} product={pro} />
              ))
            )}
          </div>
        </div>
      </div>
      <div>sections</div>
      <hr />
      <div className="info">
        <div className="footerLinks">Links</div>
        <div className="subscribe">email</div>
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
export default LandingBage;
