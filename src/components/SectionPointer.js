import React from "react";
import "./styles/Nav.sass";

const SectionPointer = props => {
  return (
    <div className={props.className}>
      {props.className.includes("active") ? (
        <p>{props.name}</p>
      ) : (
        <p>0{props.section.toString()}</p>
      )}
    </div>
  );
};

export default SectionPointer;
