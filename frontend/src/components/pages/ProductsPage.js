import React from "react";
import styled from "styled-components";
import ProductsList from "./ProductsList";
import PageLinks from "../PageLinks";

const ProductsPage = ({ products: { products }, home }) => {
  if (home) {
    console.log("it is home");
  }

  return (
    <LandingStyle>
      <div className="productsContainer">
        <div className="links">
          <PageLinks />
        </div>
        <div className="products">
          {products && products.length > 0 && (
            <>
              <h3>{products[0].type}</h3>
              <div className="productsRows">
                {products.map((product) => (
                  <ProductsList key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      {home && <div>Allow your style</div>}
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
export default ProductsPage;
