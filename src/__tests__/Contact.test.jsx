import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import Contact from '../pages/Contact';

describe('Given a Contact component', () => {
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
    test('Then there should be a contact__container section', () => {
      act(() => {
        render(
          <BrowserRouter>
            <Contact />
          </BrowserRouter>,
          container,
        );
      });

      const section = document.querySelector('.contact__container');

      expect(section).toBeTruthy();
    });
  });
});
