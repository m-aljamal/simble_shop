import React from "react";
import styled from "styled-components";
import { links } from "./utils/links";
import { Link } from "react-router-dom";
const PageLinks = () => {
  return (
    <PageLinksStyle>
      {links.map((link, index) => (
        <div key={index}>
          <Link to={link === "home" ? "/" : `/collections/${link}`}>
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </Link>
        </div>
      ))}
    </PageLinksStyle>
  );
};
const PageLinksStyle = styled.div`
  width: 20%;
`;
export default PageLinks;
