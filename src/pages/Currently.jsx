/* eslint-disable react/no-array-index-key */
import React from 'react';

import currently from './data/currently';
import '../styles/scss/Currently.scss';

export default function Contact() {
  return (
    <section className="nes-container  with-title main-box currently__container" data-aos="fade-in">

      <p className="title">Currently working on</p>
      <ul className="nes-list is-disc" key="currently">
        {currently && currently.map((el) => (
          <li key={el}>{el}</li>
        ))}
      </ul>

    </section>
  );
}
