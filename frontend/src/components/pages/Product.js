import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import PageLinks from "../PageLinks";

const Product = ({ match: { params } }) => {
  const state = useSelector(({ product_reucer: { products, loading } }) => {
    return {
      product: products.find((prod) => prod.id === params.id),
      loading,
    };
  });

  const { loading, product } = state;

  return (
    <ProductStyle>
      <PageLinks />
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className="product">
          <div>Home - name</div>
          <div className="product_container">
            <div className="image">
              <img
                src={`${process.env.REACT_APP_BACKEND_URL}/${product.image}`}
                alt={product.name}
              />
            </div>
            <div className="product_info">
              <p>{product.name}</p>
              <p>{product.price}</p>
            </div>
          </div>
          <div className="images_container">
            <div className="images">
              {product.images.map((image) => (
                <img
                  src={`${process.env.REACT_APP_BACKEND_URL}/${image.path}`}
                  alt={product.name}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </ProductStyle>
  );
};

export default Product;

const ProductStyle = styled.div`
  display: flex;
  .product_container {
    display: flex;
    .image {
      width: 50%;
      img {
        width: 100%;
      }
    }
    .product_info {
      width: 50%;
    }
  }
  .images_container {
    width: 50%;
    .images {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      img {
        width: 100%;
      }
    }
  }
`;

// ! another way
// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getProduct } from "../../actions/products_actions";
// const Product = ({ match: { params } }) => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(getProduct(params.id));
//   }, []);

//   const state = useSelector(({ product_reucer: { product, loading } }) => {
//     return { product, loading };
//   });
//   console.log(state);
//   const { loading, product } = state;
//   return <div>{loading ? <p>loading...</p> : <p>{product.name}</p>}</div>;
// };

// export default Product;
