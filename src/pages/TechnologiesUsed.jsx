import React from 'react';
import '../styles/scss/TechnologiesUsed.scss';

export default function TechnologiesUsed() {
  return (
    <div className="nes-container with-title main-box technologies__container" data-aos="fade-in">
      <p className="title">Technologies learnt</p>
      <div className="technologies__imgs">
        <img src="https://i.imgur.com/idCTIM2.png" alt="technology used html" />
        <img src="https://i.imgur.com/b5AR63r.png" alt="technology used css " />
        <img src="https://i.imgur.com/SFr5VtN.png" alt="technology used sass" />
        <img src="https://i.imgur.com/K2ezQqF.png" alt="technology used js" />
        <img src="https://i.imgur.com/26TvIxi.png" alt="technology used jest" />
        <img src="https://i.imgur.com/sL6N43q.png" alt="technology used react" />
        <img src="https://i.imgur.com/YXNnqs3.png" alt="technology used redux" />
        <img src="https://i.imgur.com/93NYU8A.png" alt="technology used node" />
        <img src="https://i.imgur.com/yKqhrvz.png" alt="technology used mongo" />
      </div>
    </div>
  );
}
