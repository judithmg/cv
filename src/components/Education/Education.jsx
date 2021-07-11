/* eslint-disable react/no-array-index-key */
import React from 'react';

import education from '../../constants/education';

export default function Contact() {
  return (
    <section className="nes-container  with-title main-box education__container" data-aos="fade-in">

      <p className="title">Education</p>
      <ul className="nes-list is-disc" key="education">
        {education && education.map((el) => (
          <>
            <li key={el.title}>
              {el.title}
              {' '}
              |
              {' '}
              {el.when}
            </li>
          </>
        ))}
      </ul>

    </section>
  );
}
