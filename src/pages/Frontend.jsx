import React from 'react';
import '../styles/scss/Frontend.scss';

export default function Frontend() {
  return (
    <section className="nes-container with-title main-box frontend__container" data-aos="fade-in">
      <p className="title">Frontend</p>

      <div className="frontend__progress">
        <p>HTML</p>
        <progress className="nes-progress is-success" value="95" max="100" />
      </div>
      <div className="frontend__progress">
        <p>CSS</p>
        <progress className="nes-progress is-success" value="90" max="100" />
      </div>
      <div className="frontend__progress">
        <p>Javascript</p>
        <progress className="nes-progress is-warning" value="85" max="100" />

      </div>

    </section>
  );
}
