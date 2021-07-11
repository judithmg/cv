import React from 'react';
import './Contact.scss';

export default function Contact() {
  return (
    <section className="nes-container is-dark with-title main-box contact__container">

      <p className="title">Contact</p>

      <div className="contact__info">
        <span>jmartigo33@gmail.com</span>
        <a href="mailto:jmartigo33@gmail.com">
          <p className="nes-badge is-splited">
            <span className="is-warning">mail</span>
            <span className="is-success">me</span>
          </p>
        </a>
      </div>

    </section>
  );
}
