import React from 'react';
import './styles.scss';

export default function MainContainer({ title, children }) {
  return (
    <section className="nes-container with-title main-box main-container__container" data-aos="fade-in">
      <p className="title">{title}</p>
      {children.map((el) => (
        <div className="main-container__progress" key={el.title}>
          <p>{el.title}</p>
          <progress className="nes-progress is-success" value={el.value} max="100" />
        </div>
      ))}
    </section>
  );
}
