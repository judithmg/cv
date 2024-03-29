import './Projects.scss';

import React from 'react';

import projectData from '../../constants/projects-data';
import ProjectInfo from '../../pages/ProjectInfo';

export default function Projects() {
  return (
    <section className="nes-container with-title main-box projects__container" data-aos="fade-in">
      <p className="title">Projects</p>
      <div
        className="projects__previews"
        data-aos="fade-in"
      >
        {
            projectData.map((project) => (
              <ProjectInfo project={project} key={project.title} />
            ))
}
      </div>
    </section>
  );
}
