import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import Backend from '../components/Progress/Backend';

describe('Given a Backend component', () => {
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
    test('Then there should be a main-container__progress section', () => {
      act(() => {
        render(
          <BrowserRouter>
            <Backend />
          </BrowserRouter>,
          container,
        );
      });

      const section = document.querySelector('.main-container__progress');

      expect(section).toBeTruthy();
    });
  });
});
