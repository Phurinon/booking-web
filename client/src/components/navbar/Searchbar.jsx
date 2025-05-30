import React from "react";
// import { Input } from "../ui/input";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);

const onSearch = (value, _e, info) =>
  console.log(info === null || info === void 0 ? void 0 : info.source, value);

function Searchbar() {
  return (
    <Space direction="vertical">
      <Search placeholder="search here..." onSearch={onSearch} enterButton />
    </Space>
  );
}

export default Searchbar;
