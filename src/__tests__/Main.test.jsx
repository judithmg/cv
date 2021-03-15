import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import Main from '../pages/Main';

describe('Given a Main component', () => {
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
    test('Then there should be a Main', () => {
      act(() => {
        render(
          <BrowserRouter>
            <Main />
          </BrowserRouter>,
          container,
        );
      });

      const main = document.querySelector('main');

      expect(main).toBeTruthy();
    });
  });
});
