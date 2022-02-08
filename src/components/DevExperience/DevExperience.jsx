/* eslint-disable max-len */
import './DevExperience.scss';

import React from 'react';

import getMonthsDiff from '../../utils/getMonthsDiff';

export default function DevExperience() {
  return (
    <section className="nes-container  with-title main-box dev__container" data-aos="fade-in">
      <p className="title">Developer Experience</p>

      <label>
        <input type="checkbox" className="nes-checkbox " defaultChecked />
        <span>Mobile Developer @LingoKids</span>
        <span> | </span>
        <span>Currently</span>
        <p>
          For the past
          {' '}
          {getMonthsDiff(new Date(), new Date(2021, 9))}
          {' '}
          months I have been working as a Mobile Developer at LingoKids, an app developed with React Native in TypeScript. My task has been helping the NUX team improve the onboarding experience for new users.
        </p>
      </label>
      <label>
        <input type="checkbox" className="nes-checkbox " defaultChecked />
        <span>FullStack Developer @rzilient</span>
        <span> | </span>
        <span>April - September 2021</span>
        <p>I am a FullStack developer at rzilient, working on the startup landing page and client platform, build with ReactJS.</p>
      </label>
    </section>
  );
}
