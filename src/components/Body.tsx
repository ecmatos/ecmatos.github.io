import React from "react";
import Global from "../styles/global";
import Navbar from "./navbar/Navbar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const BodyGrid = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
`;

const Body = () => {
  return (
    <>
      <Global />
      <BodyGrid>
        <Navbar />
        <Outlet />
      </BodyGrid>
    </>
  );
};

export default Body;
