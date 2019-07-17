import React, { Component } from "react";
import "./styles/App.sass";
import WelcomePage from "./WelcomePage";
import MainSection from "./MainSection";
import NavHamburger from "./NavHamburger";
import NavSide from "./NavSide";
import Signature from "./Signature";

class App extends Component {
  state = {
    isMenuActive: false,
    sections: [
      { name: "home", id: 0, active: true, className: "section home" },
      { name: "works", id: 1, active: false, className: "section works" },
      { name: "about", id: 2, active: false, className: "section about" },
      { name: "contact", id: 3, active: false, className: "section contact" },
      { name: "hire us", id: 4, active: false, className: "section hire" }
    ]
  };

  handlehamburgerBtn = () => {
    this.setState({
      isMenuActive: !this.state.isMenuActive
    });
  };
  handleSectionChange = name => {
    let sections = [...this.state.sections];
    sections.map(section => {
      section.active = false;
      section.name === name
        ? (section.active = true)
        : (section.active = false);
      return section;
    });
    this.setState({ sections });
  };
  handleMenu = name => {
    this.handlehamburgerBtn();
    this.handleSectionChange(name);
  };

  handleSectionArrow = action => {
    let sections = [...this.state.sections];
    let index = sections.findIndex(section => section.active);
    sections[index].active = false;
    sections[`${action === "down" ? index + 1 : index - 1}`].active = true;
    sections.map(section => {
      return section;
    });
    this.setState({ sections });
  };
  render() {
    return (
      <>
        <div className="portraitError">
          <h1>At this moment this website is designed for horizontal view.</h1>
        </div>
        <WelcomePage />
        <MainSection
          isMenuActive={this.state.isMenuActive}
          sections={this.state.sections}
          click={this.handleSectionArrow}
        />
        <NavHamburger
          handleMenu={this.handleMenu}
          click={this.handlehamburgerBtn}
          isMenuActive={this.state.isMenuActive}
          sections={this.state.sections}
        />
        <NavSide sections={this.state.sections} />
        <Signature />
      </>
    );
  }
}

export default App;
