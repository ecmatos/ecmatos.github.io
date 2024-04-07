import React from "react";
import { Container } from "./HeaderMobileStyles";
import { IoCloseSharp } from "react-icons/io5";
import px2vw from "../../utils/px2vw";
import { NavLinkWrapper, StyledNavLink } from "./HeaderMobileStyles";

type StateMenuProps = {
  menuIsVisible: boolean;
  showMenu: () => void;
};

const HeaderMobile = ({ menuIsVisible, showMenu }: StateMenuProps) => {
  return (
    <Container $visible={menuIsVisible}>
      <IoCloseSharp size={px2vw(100)} onClick={() => showMenu()} />
      <NavLinkWrapper>
        <StyledNavLink
          className={(props) => (props.isActive ? "active" : "")}
          key={"Home"}
          to={"/"}
          onClick={showMenu}
        >
          Home
        </StyledNavLink>
        <StyledNavLink
          className={(props) => (props.isActive ? "active" : "")}
          key={"Projects"}
          to={"/projects"}
          onClick={showMenu}
        >
          Projects
        </StyledNavLink>
      </NavLinkWrapper>
    </Container>
  );
};

export { HeaderMobile };
