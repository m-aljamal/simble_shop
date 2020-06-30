import React from "react";
import styled from "styled-components";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
function NavBar() {
  return (
    <Nav>
      <div>
        <SearchOutlined />
        <input type="text" className="serch" placeholder="Search" />
      </div>
      <div>
        <ShoppingCartOutlined />
        Cart (1)
      </div>
    </Nav>
  );
}
const Nav = styled.nav`
  padding: 15px 0;
  .serch {
    border: none;
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default NavBar;
