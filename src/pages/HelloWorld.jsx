/* eslint-disable max-len */

import React from 'react';
import '../styles/scss/HelloWorld.scss';

export default function HelloWorld() {
  return (
    <section className="hello-world__container" data-aos="fade-in">
      <img src="https://i.imgur.com/Gly1BxR.png" alt="avatar" />

      <div className="nes-balloon from-left hello-world__text">

        <p>Hello, world.</p>
        <p>My name is Judith Martínez and I am a Biologist who decidied to take a chance at Web Developing. </p>

        <p>Nowadays I am a fullstack developer with a code based in SOLID principles and TDD. </p>

        <p>In this portfolio you can learn more about the technologies I have worked with and the projects I am working on.</p>

      </div>
    </section>

  );
}
