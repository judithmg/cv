import React from 'react';
import './Main.scss';

import AOS from 'aos';
import 'aos/dist/aos.css';

import HelloWorld from '../components/HelloWorld';
import Social from '../components/Aside/Social';
import Contact from '../components/Aside/Contact';
import TechnologiesUsed from '../components/TechnologiesUsed/TechnologiesUsed';

import PreviousExperience from '../components/PreviousExperience/PreviousExperience';
import Frontend from '../components/Progress/Frontend';
import Backend from '../components/Progress/Backend';
import Currently from '../components/Currently/Currently';
import Projects from '../components/MyProjects/Projects';

import Footer from '../components/Footer/Footer';

AOS.init();

function MainComponent() {
  return (
    <>
      <main>
        <HelloWorld />
        <br />
        <section className="main__body">
          <div className="main__column --left" data-aos="fade-in">
            <Contact />
            <Social />
          </div>

          <div className="main__column --right">
            <Frontend />
            <Backend />
            <TechnologiesUsed />
            <Currently />
            <PreviousExperience />
            <Projects />
          </div>

        </section>
      </main>
      <Footer />
    </>
  );
}

export default MainComponent;
