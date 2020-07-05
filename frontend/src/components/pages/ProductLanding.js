import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const ProductLanding = ({ product: { images, name, price, id, image } }) => {
  console.log("land", image);

  return (
    <ProductStyle>
      <Link to={`/product/${id}`}>
        <img src={`${process.env.REACT_APP_BACKEND_URL}/${image}`} alt={name} />
        <p>{name}</p>
      </Link>
      <p>$ {price}</p>
    </ProductStyle>
  );
};

export default ProductLanding;

const ProductStyle = styled.div`
  text-align: center;
  img {
    width: 100%;
    margin-bottom: 10px;
  }
  p {
    margin: 10px 0;
  }
`;
