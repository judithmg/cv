import React from 'react';
import './PreviousExperience.scss';

export default function PreviousExperience() {
  return (
    <section className="nes-container  with-title main-box previous__container" data-aos="fade-in">
      <p className="title">Previous Experience</p>

      <label>
        <input type="checkbox" className="nes-checkbox " defaultChecked />
        <span>Research Assistant</span>
        <span> | </span>
        <span>September 2017 - December 2020</span>
        <p>Worked on different Microbiology research projects at Universidad de Barcelona.</p>
      </label>

      <label>
        <input type="checkbox" className="nes-checkbox " defaultChecked />
        <span>Associate Professor</span>
        <span> | </span>
        <span>October 2019 | January 2021</span>
        <p>At the Microbiology Department at Universidad de Barcelona.</p>
      </label>

    </section>
  );
}
