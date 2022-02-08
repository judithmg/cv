import './Main.scss';
import 'aos/dist/aos.css';

import AOS from 'aos';
import React from 'react';

import Contact from '../components/Aside/Contact';
import Social from '../components/Aside/Social';
import Currently from '../components/Currently/Currently';
import DevExperience from '../components/DevExperience/DevExperience';
import Education from '../components/Education/Education';
import Footer from '../components/Footer/Footer';
import HelloWorld from '../components/HelloWorld';
import PreviousExperience from '../components/PreviousExperience/PreviousExperience';
import Projects from '../components/Projects/Projects';
import TechnologiesUsed from '../components/TechnologiesUsed/TechnologiesUsed';

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
            <TechnologiesUsed />
            <DevExperience />
            <Education />
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
