import { isVisible } from "@testing-library/user-event/dist/utils";
import styled, { css } from "styled-components";

const Container = styled.div<{ $visible: boolean }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: ${(props) => (props.$visible ? "flex" : "none")};
  align-items: center;
  justify-content: center;

  background: rgb(230, 212, 212);
  background: linear-gradient(
    30deg,
    rgba(230, 212, 212, 1) 0%,
    rgba(222, 204, 164, 0.7819502801120448) 100%
  );

  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  > nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
  }
`;

export { Container };
