import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import App from '../App';

describe('Given a App component', () => {
  let container = null;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  });

  describe('When it is invoked', () => {
    test('Then there should be a App', () => {
      act(() => {
        render(
          <BrowserRouter>
            <App />
          </BrowserRouter>,
          container,
        );
      });

      const section = document.querySelector('section');

      expect(section).toBeTruthy();
    });
  });
});
