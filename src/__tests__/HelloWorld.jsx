import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import HelloWorld from '../components/HelloWorld';

describe('Given a HelloWorld component', () => {
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
    test('Then there should be a hello-world__container section', () => {
      act(() => {
        render(
          <BrowserRouter>
            <HelloWorld />
          </BrowserRouter>,
          container,
        );
      });

      const section = document.querySelector('.hello-world__container');

      expect(section).toBeTruthy();
    });
  });
});
