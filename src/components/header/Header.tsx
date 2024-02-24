import React, { Dispatch, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import px2vw from "../../utils/px2vw";
import { NavLinkWrapper, NavbarWrapper, StyledNavLink } from "./HeaderStyles";
import { HeaderMobile } from "./HeaderMobile";

const Header = () => {
  const [menuIsVisible, setmenuIsVisible] = useState<boolean>(false);

  const showMenu = () => {
    setmenuIsVisible(!menuIsVisible);
  };

  return (
    <>
      <NavbarWrapper>
        <HeaderMobile menuIsVisible={menuIsVisible} showMenu={showMenu} />
        <GiHamburgerMenu
          size={px2vw(100)}
          className="mobile"
          onClick={showMenu}
        />
        <NavLinkWrapper>
          <StyledNavLink
            className={(props) => (props.isActive ? "active" : "")}
            key={"Home"}
            to={"/"}
          >
            Home
          </StyledNavLink>
          <StyledNavLink
            className={(props) => (props.isActive ? "active" : "")}
            key={"Projects"}
            to={"/projects"}
          >
            Projects
          </StyledNavLink>
        </NavLinkWrapper>
      </NavbarWrapper>
    </>
  );
};

export default Header;
