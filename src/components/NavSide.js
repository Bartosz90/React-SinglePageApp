import React, { Component } from "react";
import "./styles/Nav.sass";
import SectionPointer from "./SectionPointer";

class NavSide extends Component {
  state = {};
  render() {
    return (
      <div className="sectionPointersContainer">
        <SectionPointer
          className={
            this.props.sections[0].active
              ? "sectionPointer active"
              : "sectionPointer"
          }
          section={this.props.sections[0].id}
          name={this.props.sections[0].name}
        />
        <SectionPointer
          className={
            this.props.sections[1].active
              ? "sectionPointer active"
              : "sectionPointer"
          }
          section={this.props.sections[1].id}
          name={this.props.sections[1].name}
        />
        <SectionPointer
          className={
            this.props.sections[2].active
              ? "sectionPointer active"
              : "sectionPointer"
          }
          section={this.props.sections[2].id}
          name={this.props.sections[2].name}
        />
        <SectionPointer
          className={
            this.props.sections[3].active
              ? "sectionPointer active"
              : "sectionPointer"
          }
          section={this.props.sections[3].id}
          name={this.props.sections[3].name}
        />
        <SectionPointer
          className={
            this.props.sections[4].active
              ? "sectionPointer active"
              : "sectionPointer"
          }
          section={this.props.sections[4].id}
          name={this.props.sections[4].name}
        />
      </div>
    );
  }
}

export default NavSide;
