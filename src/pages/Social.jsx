import React from 'react';
import '../styles/scss/Social.scss';

export default function Social() {
  return (
    <section className="nes-container is-dark with-title main-box social__container">
      <p className="title">Social</p>
      <div className="social__icons">

        <a href="https://github.com/judithmg">
          {' '}
          <i className="nes-icon github is-medium" />
        </a>
        <a href="https://www.linkedin.com/in/jmartigo/">
          {' '}
          <i className="nes-icon linkedin is-medium" />
        </a>

      </div>

    </section>
  );
}
