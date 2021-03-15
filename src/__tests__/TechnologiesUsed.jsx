import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import TechnologiesUsed from '../pages/TechnologiesUsed';

describe('Given a TechnologiesUsed component', () => {
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
    test('Then there should be a title', () => {
      act(() => {
        render(
          <BrowserRouter>
            <TechnologiesUsed />
          </BrowserRouter>,
          container,
        );
      });

      const title = document.querySelector('.title');

      expect(title).toBeTruthy();
    });
  });
});
