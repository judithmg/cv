import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/scss/PressStart.scss';

export default function PressStartComponent() {
  return (
    <section className="start__container" data-aos="fade-in">
      <Link to="/welcome">

        <button
          type="button"
          className="nes-btn is-warning btn__press-start words"
        >
          <span className="word">P</span>
          <span className="word">R</span>
          <span className="word">E</span>
          <span className="word">S</span>
          <span className="word">S</span>
          <span className="word">&nbsp;</span>
          <span className="word">S</span>
          <span className="word">T</span>
          <span className="word">A</span>
          <span className="word">R</span>
          <span className="word">T</span>

        </button>

      </Link>
    </section>

  );
}
