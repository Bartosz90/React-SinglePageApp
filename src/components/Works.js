import React, { Component } from "react";
import "./styles/Works.sass";
import img1 from "../images/work2.png";
import img2 from "../images/work1.png";
import img3 from "../images/work3.png";
import img4 from "../images/work4.png";
import img5 from "../images/work5.png";

class Works extends Component {
  state = {
    works: [
      { id: 1, name: "work work-1", active: true, img: img1 },
      { id: 2, name: "work work-2", active: false, img: img2 },
      { id: 3, name: "work work-3", active: false, img: img3 },
      { id: 4, name: "work work-4", active: false, img: img4 },
      { id: 5, name: "work work-5", active: false, img: img5 }
    ],
    activeWorkIndex: 0
  };
  handleWorkSelection = action => {
    let works = [...this.state.works];
    works[this.state.activeWorkIndex].active = false;
    if (action === "next" && this.state.activeWorkIndex < works.length - 1) {
      works[this.state.activeWorkIndex + 1].active = true;
      this.setState({ works, activeWorkIndex: this.state.activeWorkIndex + 1 });
    } else if (action === "next" && this.state.activeWorkIndex === 4) {
      works[0].active = true;
      this.setState({ works, activeWorkIndex: 0 });
    } else if (action === "prev" && this.state.activeWorkIndex > 0) {
      works[this.state.activeWorkIndex - 1].active = true;
      this.setState({ works, activeWorkIndex: this.state.activeWorkIndex - 1 });
    } else if (action === "prev" && this.state.activeWorkIndex === 0) {
      works[4].active = true;
      this.setState({ works, activeWorkIndex: 4 });
    }
  };

  render() {
    const works = this.state.works.map(work => (
      <section
        className={work.active ? `${work.name} active` : work.name}
        key={work.id}
      >
        <img src={work.img} alt="example project" />
        <h2>{`work ${work.id}`}</h2>
      </section>
    ));
    return (
      <>
        {works}
        <button
          action="prev"
          className="prev"
          onClick={() => this.handleWorkSelection("prev")}
        >
          <i className="fas fa-arrow-up" />
        </button>
        <button
          action="next"
          className="next"
          onClick={() => this.handleWorkSelection("next")}
        >
          <i className="fas fa-arrow-up" />
        </button>
      </>
    );
  }
}

export default Works;
