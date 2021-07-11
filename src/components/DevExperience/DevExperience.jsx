/* eslint-disable max-len */
import React from 'react';
import './DevExperience.scss';

export default function DevExperience() {
  return (
    <section className="nes-container  with-title main-box dev__container" data-aos="fade-in">
      <p className="title">Developer Experience</p>

      <label>
        <input type="checkbox" className="nes-checkbox " defaultChecked />
        <span>FullStack Developer @rzilient</span>
        <span> | </span>
        <span>2021</span>
        <p>I am a FullStack developer at rzilient, a start-up that helps companies manage their iT fleet while reducing their digital pollution, using refurbished iT and offering clients a platform to manage their fleet.</p>
      </label>
    </section>
  );
}
