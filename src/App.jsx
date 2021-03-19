import './styles/scss/App.scss';
import './styles/scss/PressStart.scss';
import React, { useState } from 'react';

import Main from './pages/Main';

function App() {
  const [init, setInit] = useState(true);

  return (
    <>
      {
      init ? (
        <section className="start__container" data-aos="fade-in">

          <button
            type="button"
            className="nes-btn is-warning btn__press-start words"
            onClick={() => setInit(!init)}
          >
            <span className="word">P</span>
            <span className="word">R</span>
            <span className="word">E</span>
            <span className="word">S</span>
            <span className="word">S</span>
            <span className="word">&nbsp;</span>
            <span className="word">S</span>
            <span className="word">T</span>
            <span className="word">A</span>
            <span className="word">R</span>
            <span className="word">T</span>

          </button>

        </section>
      ) : (<Main />)
    }

    </>
  );
}

export default App;
