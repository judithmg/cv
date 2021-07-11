/* eslint-disable max-len */

import React from 'react';
import { helloWorld } from '../../constants';
import './HelloWorld.scss';

export default function HelloWorld() {
  return (
    <section className="hello-world__container" data-aos="fade-in">
      <img src="https://i.imgur.com/Gly1BxR.png" alt="avatar" />

      <div className="nes-balloon from-left hello-world__text">
        {helloWorld.map((el) => <p>{el}</p>)}
      </div>
    </section>

  );
}
