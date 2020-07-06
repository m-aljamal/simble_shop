import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PageLinks from "../PageLinks";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../actions/products_actions";
import { Select, InputNumber, Button, message, Form, Input } from "antd";

const formLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};
const Product = ({ match: { params } }) => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProduct(params.id));
  // }, [params.id, dispatch]);

  // const state = useSelector(({ product_reucer: { product, loading } }) => {
  //   return { product, loading };
  // });
  // const { loading, product } = state;
  const { Option } = Select;

  const state = useSelector(({ product_reucer: { products, loading } }) => {
    return {
      product: products.find((prod) => prod.id === params.id),
      loading,
    };
  });
  
  const { loading, product } = state;
  if(!loading && product){
    
    console.log('state', state);
  }

  const url = process.env.REACT_APP_BACKEND_URL;
  const [displayImage, setDisplayImage] = useState("");
 

  const handleImage = (image) => {
    setDisplayImage(image);
  };

  const handleSubmit = (values) => {
    console.log("form", values);
  };
  return (
    <ProductStyle>
      <PageLinks />
      {!loading && product ? (
        <div className="product">
          <div>Home - name</div>
          <div className="product_container">
            <div className="image">
              <img
                src={
                  displayImage
                    ? `${url}/${displayImage}`
                    : `${url}/${product.image}`
                }
                alt={product.name}
              />
            </div>
            <div className="product_info">
              <h2>{product.name}</h2>
              <h2>$ {product.price}</h2>
              <Form onFinish={handleSubmit} {...formLayout}>
                <Form.Item
                  name="colors"
                  label="Select colors"
                  rules={[
                    {
                      required: true,
                      message: "Please select product colors!",
                      type: "array",
                    },
                  ]}
                >
                  <Select placeholder="Please select color" mode="multiple">
                    {product.colors &&
                      product.colors.map((color, index) => (
                        <Option key={index} value={`${color}`}>
                          {color}
                        </Option>
                      ))}
                  </Select>
                </Form.Item>
                <Form.Item
                  name="size"
                  label="Select sizes"
                  rules={[
                    {
                      required: true,
                      message: "Please select product sizes!",
                      type: "array",
                    },
                  ]}
                >
                  <Select placeholder="Please select sizes" mode="multiple">
                    {product.sizes &&
                      product.sizes.map((size, index) => (
                        <Option key={index} value={`${size}`}>
                          {size}
                        </Option>
                      ))}
                  </Select>
                </Form.Item>
                <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
                  <Button
                    style={{ backgroundColor: "black", color: "white" }}
                    htmlType="submit"
                  >
                    ADD TO CART
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
          <div className="images_container">
            <div className="images">
              {product.images &&
                product.images.map((image, index) => (
                  <img
                    onClick={() => handleImage(image.path)}
                    key={index}
                    src={`${url}/${image.path}`}
                    alt={product.name}
                  />
                ))}
            </div>
          </div>
          <div className="disc">
            <p>{product.discription}</p>
          </div>
        </div>
      ) : (
        <p>loading...</p>
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
      cursor: pointer;
      margin-top: 30px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 20px;
      img {
        width: 100%;
      }
    }
  }
  .disc {
    margin-top: 20px;
    p {
      line-height: 2;
      font-size: 1rem;
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
