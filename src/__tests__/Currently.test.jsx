import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import Currently from '../components/Currently/Currently';

describe('Given a Currently component', () => {
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
    test('Then there should be a currently__container section', () => {
      act(() => {
        render(
          <BrowserRouter>
            <Currently />
          </BrowserRouter>,
          container,
        );
      });

      const section = document.querySelector('.currently__container');

      expect(section).toBeTruthy();
    });
  });
});
