import { Upload, Button, message } from "antd";
import { UploadOutlined } from "@ant-design/icons";

import React from "react";
const Uploader = ({imageChange}) => {
  const [fileList, setFileList] = React.useState([]);
   

  const props = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      return setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList({ ...fileList, file });

      return false;
    },
  };
  
  imageChange(fileList.file)
  return (
    <div>
      <Upload {...props}>
        <Button>
          <UploadOutlined /> Select File
        </Button>
      </Upload>
    </div>
  );
};

export default Uploader;
