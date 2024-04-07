import styled from "styled-components";
import { colors } from "../../data/colors";

export const Container = styled.section`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin-top: 1.5rem;

  @media (min-width: 900px) {
    gap: 0.1rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 1080px;
    margin-top: 0rem;
  }
`;

export const ProjectLink = styled.a`
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #654f3a;
  border-radius: 3px;
  box-shadow: 0 1px 3px;
  text-decoration: none;

  &:hover {
    transition: outline 0.5s;
    border: 2px solid #000;
  }
`;

export const ProjectBox = styled.article`
  display: block;
`;

export const ProjectImage = styled.img`
  width: 100%;
`;

export const ProjectTitle = styled.h3`
  color: ${colors.textEffect};
`;

export const ProjectDescription = styled.p`
  color: ${colors.textMain};
`;
