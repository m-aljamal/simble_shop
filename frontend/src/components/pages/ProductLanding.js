import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const ProductLanding = ({ product: { images, name, price, id } }) => {
  return (
    <ProductStyle>
      <Link to={`/product/${id}`}>
        <img src={images[0]} alt={name} />
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
