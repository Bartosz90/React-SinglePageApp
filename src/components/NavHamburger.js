import React from "react";
import "./styles/Nav.sass";

const NavHamburger = ({ sections, isMenuActive, click, handleMenu }) => {
  const buttons = sections.map(button => (
    <button
      className="menuBtn"
      onClick={() => handleMenu(button.name)}
      active={button.active}
      key={button.id}
    >
      {button.name}
    </button>
  ));
  return (
    <nav>
      <button
        className={isMenuActive ? "hamburgerBtn" : "hamburgerBtn active"}
        onClick={click}
      >
        <i className="fas fa-bars" />
      </button>
      <section className={isMenuActive ? "navButtons active" : "navButtons"}>
        {buttons}
      </section>
    </nav>
  );
};

export default NavHamburger;
