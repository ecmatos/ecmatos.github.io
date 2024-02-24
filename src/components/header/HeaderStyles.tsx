import styled from "styled-components";
import px2vw from "../../utils/px2vw";
import { NavLink } from "react-router-dom";
import { colors } from "../../data/colors";

const NavbarWrapper = styled.header`
  padding: ${px2vw(32)};

  .mobile {
    display: none;
  }

  @media (max-width: 900px) {
    > nav {
      display: none;
    }

    .mobile {
      display: initial;
      position: absolute;
      top: 1rem;
      right: 1rem;
    }
  }
`;

const NavLinkWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: relative;
`;

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
