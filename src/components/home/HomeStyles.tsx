import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
  display: flex;
  flex-grow: 1;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: ${px2vw(16)};
  max-width: 100%;
`;

export const Box = styled.div`
  display: block;
  width: ${px2vw(320, 320)};
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};

  @media (min-width: 900px) {
    width: ${px2vw(250, 900)};
    min-height: ${px2vw(300)};
  }
`;

export const MyImage = styled.img`
  width: 100%;
  border-radius: 500px;
`;

export const BoxTitle = styled.h3`
  color: #333;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 900px) {
    font-size: 1.5rem;
  }
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 1.5rem;
`;
