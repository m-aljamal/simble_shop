import React, { useState } from "react";
import {
  Form,
  Input,
  Select,
  InputNumber,
  Button,
  Upload,
  message,
} from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { UploadOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { createProduct } from "../../actions/products_actions";
import { useHistory } from "react-router-dom";

const { Option } = Select;
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};

const Dashboard = () => {
  const [fileList, setfileList] = useState({});
  const [uploading, setUploading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  // const normFile = (e) => {
  //   console.log("Upload event:", e);

  //   if (Array.isArray(e)) {
  //     return e;
  //   }

  //   return e && e.fileList;
  // };
  // ! upload
  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append("files[]", file);
    });

    setUploading(true);
  };

  // const { uploading, fileList } = this.state;
  const props = {
    onRemove: (file) => {
      setfileList((state) => {
        const index = state.fileList.indexOf(file);
        const newFileList = state.fileList.slice();
        newFileList.splice(index, 1);
        return {
          fileList: newFileList,
        };
      });
    },
    beforeUpload: (file) => {
      setfileList((state) => ({
        fileList: [...state.fileList, file],
      }));
      return false;
    },
    fileList,
  };

  // !
  const onFinish = (values) => {
    dispatch(createProduct(values));
    history.push("/");
  };
  return (
    <div>
      <div className="newProduct">
        <Form
          name="validate_other"
          {...formItemLayout}
          onFinish={onFinish}
          initialValues={{
            "input-number": 3,
            "checkbox-group": ["A", "B"],
            rate: 3.5,
          }}
        >
          <Form.Item
            name="name"
            label="Product name"
            rules={[{ required: true }]}
          >
            <Input />
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
            <Select placeholder="Please select type">
              <Option value="accessories">Accessories</Option>
              <Option value="denim">Denim</Option>
              <Option value="footwear">Footwear</Option>
              <Option value="jeans">Jeans</Option>
              <Option value="outerwear">Outerwear</Option>
              <Option value="pants">Pants</Option>
              <Option value="shirts">Shirts</Option>
              <Option value="shorts">Shorts</Option>
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
            <Select mode="multiple" placeholder="Please select product colors">
              <Option value="bleach">Bleach</Option>
              <Option value="green">Green</Option>
              <Option value="blue">Blue</Option>
              <Option value="blak">Black</Option>
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
            <Select mode="multiple" placeholder="Please select product sizes">
              <Option value="28">28</Option>
              <Option value="30">30</Option>
              <Option value="32">32</Option>
              <Option value="34">34</Option>
              <Option value="36">36</Option>
              <Option value="38">38</Option>
              <Option value="small">small</Option>
              <Option value="midum">midum</Option>
              <Option value="large">large</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Quantity">
            <Form.Item name="quantity" noStyle>
              <InputNumber min={1} max={5000} />
            </Form.Item>
            <span className="ant-form-text"> Price</span>
          </Form.Item>
          <Form.Item label="Price">
            <Form.Item name="price" noStyle>
              <InputNumber min={1} max={5000} />
            </Form.Item>
            <span className="ant-form-text"> Price</span>
          </Form.Item>
          {/* <Form.Item label="Dragger">
            <Form.Item
              name="images"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              noStyle
            >
              <Upload.Dragger
                name="images"
                action={`${process.env.REACT_APP_BACKEND_URL}/api/products/new`}
              >
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">
                  Click or drag file to this area to upload
                </p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload.
                </p>
              </Upload.Dragger>
            </Form.Item>
          </Form.Item> */}
          <Form.Item
            wrapperCol={{
              span: 12,
              offset: 6,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              onClick={handleUpload}
              disabled={fileList.length === 0}
              loading={uploading}
            >
              Submit
            </Button>
          </Form.Item>
          ,
        </Form>
      </div>
    </div>
  );
};

export default Dashboard;
