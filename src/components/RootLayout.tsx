import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import styled from "styled-components";
import Global from "../styles/global";

const RootStyles = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
`;

const RootLayout = () => {
  return (
    <>
      <Global />
      <RootStyles>
        <Header />
        <Outlet />
      </RootStyles>
    </>
  );
};

export default RootLayout;
