/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import Modal from './Modal';
import useModal from '../assets/useModal';

export default function ProjectInfo({ project }) {
  const { isShowing, toggle } = useModal();
  return (
    <>
      <div className="project-img__container">

        <button
          type="button"
          className="nes-btn is-success"
          onClick={toggle}

        >
          {project.title.toUpperCase()}
        </button>

      </div>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        project={project}
      />
    </>
  );
}
