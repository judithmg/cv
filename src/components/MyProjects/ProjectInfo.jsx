/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import Modal from './Modal';
import useModal from '../../assets/useModal';

export default function ProjectInfo({ project }) {
  const { isShowing, toggle } = useModal();
  return (
    <>
      <div className="project-img__container">
        <img
          src={project.previewLink}
          alt="project"
          className="project-img"
          onClick={toggle}
        />
      </div>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        project={project}
      />
    </>
  );
}
