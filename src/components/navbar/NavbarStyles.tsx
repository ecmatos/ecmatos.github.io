import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import { NavLink } from "react-router-dom";
import { colors } from "../../data/colors";

const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const NavLinkWrapper = styled.div``;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  transition: 0.2s;
  color: ${colors.textMain};
  font-size: 1.8rem;

  &:hover {
    color: ${colors.textEffect};
  }

  &.active {
    color: ${colors.textEffect};
    text-decoration: underline;
  }
`;

export { NavbarWrapper, NavLinkWrapper, StyledNavLink };
