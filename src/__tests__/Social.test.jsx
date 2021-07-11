import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import Social from '../components/Aside/Social';

describe('Given a Social component', () => {
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
    test('Then there should be a social__containers section', () => {
      act(() => {
        render(
          <BrowserRouter>
            <Social />
          </BrowserRouter>,
          container,
        );
      });

      const section = document.querySelector('.social__container');

      expect(section).toBeTruthy();
    });
  });
});
