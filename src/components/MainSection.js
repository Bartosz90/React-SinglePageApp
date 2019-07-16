import React from "react";
import "./styles/MainSection.sass";
import SectionChangeBtn from "./SectionChangeBtn.js";
import HomePage from "./HomePage";
import Works from "./Works.js";
import About from "./About.js";
import Contact from "./Contact";
import Hire from "./Hire.js";

const MainSection = props => {
  const sections = props.sections.map(section => {
    return (
      <section
        key={section.id}
        name={section.name}
        active={section.active}
        className={
          section.active
            ? `${section.className} active`
            : `${section.className}`
        }
      >
        {section.name === "home" ? <HomePage className="homePage" /> : null}
        {section.name === "works" ? (
          <Works className="works" active={section.active} />
        ) : null}
        {section.name === "about" ? (
          <About className="about" active={section.active} />
        ) : null}
        {section.name === "contact" ? <Contact className="contact" /> : null}
        {section.name === "hire us" ? <Hire className="hire" /> : null}

        {/* {section.name !== "home" &&
        section.name !== "contact" &&
        section.name !== "works" &&
        section.name !== "about"
          ? section.name
          : null} */}
      </section>
    );
  });
  return (
    <main className={props.isMenuActive ? "main active" : "main"}>
      {props.sections[0].active ? null : (
        <SectionChangeBtn
          action="up"
          className="sectionUp sectionChangeBtn"
          click={props.click}
        />
      )}
      {props.sections[4].active ? null : (
        <SectionChangeBtn
          action="down"
          className="sectionDown sectionChangeBtn"
          click={props.click}
        />
      )}
      {sections}
    </main>
  );
};

export default MainSection;
