import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import Projects from '../components/MyProjects/Projects';

describe('Given a Projects component', () => {
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
    test('Then there should be a projects__container section', () => {
      act(() => {
        render(
          <BrowserRouter>
            <Projects />
          </BrowserRouter>,
          container,
        );
      });

      const section = document.querySelector('.projects__container');

      expect(section).toBeTruthy();
    });
  });
});
