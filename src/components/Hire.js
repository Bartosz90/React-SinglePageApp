import React, { Component } from "react";
import "./styles/Hire.sass";

class Hire extends Component {
  state = {
    buttons: [
      {
        action: "Web Design",
        active: false,
        id: 0,
        gridArea: "btn1"
      },
      {
        action: "Graphic Design",
        active: false,
        id: 1,
        gridArea: "btn2"
      },
      {
        action: "Motion Design",
        active: false,
        id: 2,
        gridArea: "btn3"
      },
      {
        action: "App Design",
        active: false,
        id: 3,
        gridArea: "btn4"
      },
      {
        action: "UX Design",
        active: false,
        id: 4,
        gridArea: "btn5"
      },
      {
        action: "UI Design",
        active: false,
        id: 5,
        gridArea: "btn6"
      }
    ],
    buttonWidth: 220
  };
  updateDimensions = () => {
    if (window.innerWidth < 1200) {
      this.setState({ buttonWidth: `${20}vw` });
    } else if (window.innerWidth < 1400) {
      this.setState({ buttonWidth: `${17}vw` });
    } else {
      this.setState({ buttonWidth: `${13}vw` });
    }
  };
  handleActiveButtons = action => {
    const buttons = [...this.state.buttons];
    buttons.map(button => {
      if (button.action === action) {
        button.active = !button.active;
      }
      return button;
    });
    this.setState({ buttons });
  };
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }
  render() {
    const buttons = this.state.buttons.map(button => (
      <button
        action={button.action}
        className={button.active ? "active" : ""}
        key={button.id}
        onClick={() => this.handleActiveButtons(button.action)}
        type="button"
        style={{
          width: this.state.buttonWidth,
          justifySelf: "center",
          alignSelf: "center",
          gridArea: button.gridArea
        }}
      >
        {button.active && <i className="fas fa-check" />} {button.action}
      </button>
    ));
    return (
      <form className="form">
        <p>What can I do for you?</p>
        {buttons}
        <input type="text" placeholder="Your name" />
        <input type="email" placeholder="Your email" />
        <button
          type="button"
          style={{
            gridArea: "submit",
            width: this.state.buttonWidth,
            justifySelf: "center",
            alignSelf: "center"
          }}
        >
          Send
        </button>
      </form>
    );
  }
}

export default Hire;
