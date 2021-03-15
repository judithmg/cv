import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import PressStart from '../pages/PressStart';

describe('Given a PressStart component', () => {
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
    test('Then there should be a button', () => {
      act(() => {
        render(
          <BrowserRouter>
            <PressStart />
          </BrowserRouter>,
          container,
        );
      });

      const button = document.querySelector('.is-warning');

      expect(button).toBeTruthy();
    });
  });
});
