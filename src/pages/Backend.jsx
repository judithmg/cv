import React from 'react';
import '../styles/scss/Backend.scss';

export default function Backend() {
  return (
    <section className="nes-container with-title main-box backend__container" data-aos="fade-in">
      <p className="title">Backend</p>

      <div className="backend__progress">
        <p>Node.js</p>
        <progress className="nes-progress is-success" value="85" max="100" />
      </div>

    </section>
  );
}
