import React, { Component } from "react";
import "./styles/HomePage.sass";
import img1 from "../images/homeimg1.png";
import img2 from "../images/homeimg2.png";
import img3 from "../images/homeimg3.png";

class HomePage extends Component {
  state = {
    activeHeaderIndex: 0,
    animationStartCounter: 0
  };

  content = [
    { header: "This is a React single page application.", img: img1 },
    { header: "Made with create-react-app.", img: img2 },
    { header: "React is awesome! ", img: img3 }
  ];

  // componentDidMount() {
  //   setInterval(() => {
  //     this.state.activeHeaderIndex !== 2
  //       ? this.setState({
  //           activeHeaderIndex: this.state.activeHeaderIndex + 1
  //         })
  //       : this.setState({ activeHeaderIndex: 0 });
  //   }, 7000);
  // }
  startHomeAnimation = () => {
    setInterval(() => {
      this.state.activeHeaderIndex !== 2
        ? this.setState({
            activeHeaderIndex: this.state.activeHeaderIndex + 1
          })
        : this.setState({ activeHeaderIndex: 0 });
    }, 5000);
  };
  componentDidMount() {
    let timer = setInterval(() => {
      this.setState({
        animationStartCounter: this.state.animationStartCounter + 1
      });
      if (this.state.animationStartCounter === 900) {
        this.startHomeAnimation();
        clearInterval(timer);
      }
    }, 1);
  }
  render() {
    return (
      this.state.animationStartCounter === 900 && (
        <div className={this.props.className}>
          <h1> {this.content[this.state.activeHeaderIndex].header}</h1>
          <img
            src={this.content[this.state.activeHeaderIndex].img}
            alt="example"
          />
        </div>
      )
    );
  }
}

export default HomePage;
