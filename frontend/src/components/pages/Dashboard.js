import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../actions/products_actions";
import { Select, InputNumber, Button, message, Form, Input } from "antd";
const { TextArea } = Input;

const { Option } = Select;

const formLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};
const Dashboard = () => {
  const [formData, setFormData] = useState({
    colors: "",
    name: "",
    price: 0,
    quantity: 0,
    type: "",
    images: [],
    sizes: "",
    image: "",
    discription: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(createProduct(formData));
    message.success(`Product is added  successfully.`);
    setFormData({
      colors: "",
      name: "",
      price: 0,
      quantity: 0,
      type: "",
      images: [],
      sizes: "",
      image: "",
      discription: "",
    });
  };

  // const oneImage = {
  //   name: "image",
  //   multiple: false,
  //   showUploadList: false,

  //   onChange(info) {
  //     const status = info.file.status;
  //     if (status !== "uploading") {
  //       console.log(info.file);

  //       setFormData({ ...formData, image: info.file });
  //     }
  //     if (status === "done") {
  //       console.log("done", info.file);

  //       message.success(`${info.file.name} file uploaded successfully.`);
  //     } else if (status === "error") {
  //       message.error(`${info.file.name} file upload failed.`);
  //     }
  //   },
  //   beforeUpload: (file) => {
  //     setFormData({ ...formData, image: file });

  //     return false;
  //   },
  // };

  return (
    <div>
      <Form onFinish={handleSubmit} {...formLayout}>
        <Form.Item
          name="name"
          label="Product name"
          rules={[{ required: true }]}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        >
          <Input name="name" />
        </Form.Item>

        <Form.Item label="Quantity">
          <Form.Item noStyle>
            <InputNumber
              name="quantity"
              onChange={(e) => setFormData({ ...formData, quantity: e })}
            />
          </Form.Item>
        </Form.Item>
        <Form.Item label="Price">
          <Form.Item name="price" noStyle>
            <InputNumber
              onChange={(e) => setFormData({ ...formData, price: e })}
            />
          </Form.Item>
        </Form.Item>

        <Form.Item
          name="type"
          label="Select product type"
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please select product type!",
            },
          ]}
        >
          <Select
            onChange={(e) => setFormData({ ...formData, type: e })}
            name="type"
            placeholder="Please select type"
          >
            <Option value="accessories">Accessories</Option>
            <Option value="denim">Denim</Option>
            <Option value="footwear">Footwear</Option>
            <Option value="jeans">Jeans</Option>
            <Option value="outerwear">Outerwear</Option>
            <Option value="pants">Pants</Option>
            <Option value="shirts">Shirts</Option>
            <Option value="shorts">Shorts</Option>
            <Option value="featured collection">Featured collection</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="colors"
          label="Select[multiple-colors]"
          rules={[
            {
              required: true,
              message: "Please select product colors!",
              type: "array",
            },
          ]}
        >
          <Select
            onChange={(e) => setFormData({ ...formData, colors: e })}
            mode="multiple"
            placeholder="Please select product colors"
          >
            <Option value="bleach">Bleach</Option>
            <Option value="green">Green</Option>
            <Option value="blue">Blue</Option>
            <Option value="blak">Black</Option>
            <Option value="navy">Navy</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="sizes"
          label="Select[multiple-sizes]"
          rules={[
            {
              required: true,
              message: "Please select product sizes!",
              type: "array",
            },
          ]}
        >
          <Select
            onChange={(e) => setFormData({ ...formData, sizes: e })}
            mode="multiple"
            placeholder="Please select product sizes"
          >
            <Option value="28">28</Option>
            <Option value="30">30</Option>
            <Option value="32">32</Option>
            <Option value="34">34</Option>
            <Option value="36">36</Option>
            <Option value="38">38</Option>
            <Option value="small">small</Option>
            <Option value="midum">midum</Option>
            <Option value="large">large</Option>
            <Option value="x-large">x-large</Option>
          </Select>
        </Form.Item>
        <Form.Item label="Select main image">
          <input
            type="file"
            name="image"
            onChange={(e) =>
              setFormData({ ...formData, image: e.target.files[0] })
            }
            multiple
          />
        </Form.Item>
        <Form.Item label="Select multiple images">
          <input
            type="file"
            name="images"
            onChange={(e) =>
              setFormData({ ...formData, images: e.target.files })
            }
            multiple
          />
        </Form.Item>
        <Form.Item label="Product discription">
          <TextArea
            rows={6}
            onChange={(e) =>
              setFormData({ ...formData, discription: e.target.value })
            }
          />
        </Form.Item>

        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Dashboard;

// ! working version
// import React, { useState } from "react";

// import { Upload } from "antd";
// import { useDispatch } from "react-redux";
// import { createProduct } from "../../actions/products_actions";
// const Dashboard = () => {
//   const [formData, setFormData] = useState({
//     colors: "",
//     name: "",
//     price: 0,
//     quantity: 0,
//     type: "",
//     images: [],
//     sizes: "",
//     image: "",
//   });

//   const dispatch = useDispatch();
//   const {
//     colors,
//     name,
//     price,
//     quantity,
//     type,
//     sizes,

//   } = formData;

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     console.log(formData);
//     dispatch(createProduct(formData));
//   };
//   const handleChangeImage = (e) => {
//     console.log(e.target.files);
//     setFormData({ ...formData, images: e.target.files });
//   };
//   const handleChangeOneImage = (e) => {
//     console.log(e.target.files[0]);
//     setFormData({ ...formData, image: e.target.files[0] });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           Name:
//           <input name="name" type="text" value={name} onChange={handleChange} />
//         </div>
//         <div>
//           Price:
//           <input
//             name="price"
//             type="number"
//             value={price}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           Quantity:{" "}
//           <input
//             name="quantity"
//             type="number"
//             value={quantity}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           Type:
//           <input name="type" type="text" value={type} onChange={handleChange} />
//         </div>
//         <div>
//           Colors:
//           <input
//             name="colors"
//             type="text"
//             value={colors}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           Sizes:
//           <input
//             name="sizes"
//             type="text"
//             value={sizes}
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           images
//           <input
//             type="file"
//             name="images"
//             onChange={handleChangeImage}
//             multiple
//           />
//         </div>
//         <div>
//           image
//           <input type="file" name="image" onChange={handleChangeOneImage} />
//         </div>

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default Dashboard;
