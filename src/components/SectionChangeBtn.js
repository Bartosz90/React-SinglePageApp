import React from "react";
import "./styles/MainSection.sass";

const SectionChangeBtn = props => {
  return (
    <button
      className={props.className}
      action={props.action}
      onClick={() => props.click(props.action)}
    >
      <i className="fas fa-arrow-up" />
    </button>
  );
};

export default SectionChangeBtn;
