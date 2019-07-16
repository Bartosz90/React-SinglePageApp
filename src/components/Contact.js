import React from "react";
import "./styles/Contact.sass";

const Contact = () => {
  return (
    <>
      <span className="dot dot-big" />
      <span className="dot dot-smaller" />
      <span className="dot dot-small" />
      <section className="contact-me">
        <a
          href="https://github.com/Bartosz90"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/bartosz-krupa-95b715159/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin" />
        </a>
        <a
          href="https://www.facebook.com/bartek.krupa.503"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-square" />
        </a>
      </section>
    </>
  );
};

export default Contact;
