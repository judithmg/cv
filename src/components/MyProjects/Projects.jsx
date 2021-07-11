import React from 'react';

import './Projects.scss';
import projectData from '../../constants/projects-data';
import ProjectInfo from './ProjectInfo';

export default function Projects() {
  return (
    <section className="nes-container with-title main-box projects__container">
      <p className="title">Projects</p>
      <div className="projects__previews">
        {
            projectData.map((project) => (
              <ProjectInfo project={project} key={project.title} />
            ))
}
      </div>
    </section>
  );
}
