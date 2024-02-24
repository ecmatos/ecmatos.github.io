import React, { Dispatch } from "react";
import { Container } from "./HeaderMobileStyles";
import { IoCloseSharp } from "react-icons/io5";
import px2vw from "../../utils/px2vw";
import { isVisible } from "@testing-library/user-event/dist/utils";

type StateMenuProps = {
  menuIsVisible: boolean;
  showMenu: () => void;
};

const HeaderMobile = ({ menuIsVisible, showMenu }: StateMenuProps) => {
  console.log(menuIsVisible);

  return (
    <Container $visible={menuIsVisible}>
      <IoCloseSharp size={px2vw(100)} onClick={() => showMenu()} />
      <nav>
        <a href="#">Home</a>
        <a href="#">Projects</a>
      </nav>
    </Container>
  );
};

export { HeaderMobile };
