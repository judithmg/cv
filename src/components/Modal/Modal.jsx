import './Modal.scss';

import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isShowing, hide, project }) => (isShowing ? ReactDOM.createPortal(
  <>
    <div className="modal-overlay" />
    <div className="modal-wrapper">

      <div className="project__modal">
        <button type="button" className="modal-close nes-btn is-error" onClick={hide}>X</button>
        <div className="nes-container with-title is-dark">
          <p className="title">About</p>
          <img src={project.modalImg} alt="" />
          <p className="project__title">
            {project.title}
            {' '}
            |
            {' '}
            {project.technologies}
          </p>
          <p>{project.info}</p>
          <div className="project__links">
            {project.demoLink && (
              <a href={project.demoLink}>
                <button type="button" className="nes-btn is-success">DEMO</button>
              </a>
            )}
            {project.codeLink && (
              <a href={project.codeLink}>
                <button type="button" className="nes-btn is-warning">CODE</button>
              </a>
            )}

          </div>
        </div>
      </div>

    </div>
  </>, document.body,
) : null);

export default Modal;
