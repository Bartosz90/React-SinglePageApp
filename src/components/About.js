import React from "react";
import "./styles/About.sass";

const About = props => {
  return (
    <>
      <p
        className={
          props.active
            ? "quote-container quote-1 active"
            : "quote-container quote-1"
        }
      >
        Everything is
      </p>
      <p
        className={
          props.active
            ? "quote-container quote-2 active"
            : "quote-container quote-2"
        }
      >
        <span>Is this</span> possible
      </p>
      <span className={props.active ? "card active" : "card"}>
        <span className="card-front">?</span>
        <span className="card-back">.</span>
      </span>
    </>
  );
};

export default About;
