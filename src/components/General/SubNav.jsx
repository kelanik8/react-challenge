import React from "react";
import { SubNavHeader } from "./styles";

const SubNavbar = ({ title }) => (
  <SubNavHeader>
    <div className="container">
      <div className="navbar">
        <h1 className="title">{title}</h1>
      </div>
    </div>
  </SubNavHeader>
);

export default SubNavbar;
