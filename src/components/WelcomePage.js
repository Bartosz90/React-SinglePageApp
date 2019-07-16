import React, { Component } from "react";
import "./styles/WelcomePage.sass";

class WelcomePage extends Component {
  state = {
    isActive: true
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isActive: !this.state.isActive
      });
    }, 4500);
  }

  render() {
    return (
      <>
        <div
          className={
            this.state.isActive ? "loadingAnimation active" : "loadingAnimation"
          }
        >
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div
          className={
            this.state.isActive
              ? "welcomeRectangle rectangle-1 active"
              : "welcomeRectangle rectangle-1"
          }
        />
        <div
          className={
            this.state.isActive
              ? "welcomeRectangle rectangle-2 active"
              : "welcomeRectangle rectangle-2"
          }
        >
          <h2>
            At this moment this website is not working on mobile devices. For
            best experience, visit it on desktop/notebook.
          </h2>
        </div>
      </>
    );
  }
}

export default WelcomePage;
