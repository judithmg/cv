import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import Footer from '../pages/Footer';

describe('Given a Footer component', () => {
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
    test('Then there should be a footer', () => {
      act(() => {
        render(
          <BrowserRouter>
            <Footer />
          </BrowserRouter>,
          container,
        );
      });

      const footer = document.querySelector('footer');

      expect(footer).toBeTruthy();
    });
  });
});
