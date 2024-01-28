import React from "react";
import { NavbarWrapper, NavLinkWrapper, StyledNavLink } from "./NavbarStyles";

const Navbar = () => {
  const links = [
    { page: "Home", href: "/" },
    { page: "Projects", href: "/projects" },
  ];

  return (
    <NavbarWrapper>
      {links.map((link) => (
        <NavLinkWrapper>
          <StyledNavLink
            className={(props) => (props.isActive ? "active" : "")}
            key={link.page}
            to={link.href}
          >
            {link.page}
          </StyledNavLink>
        </NavLinkWrapper>
      ))}
    </NavbarWrapper>
  );
};

export default Navbar;
