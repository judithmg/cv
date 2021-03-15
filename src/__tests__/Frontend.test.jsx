import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import Frontend from '../pages/Frontend';

describe('Given a Frontend component', () => {
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
    test('Then there should be a frontend__container section', () => {
      act(() => {
        render(
          <BrowserRouter>
            <Frontend />
          </BrowserRouter>,
          container,
        );
      });

      const section = document.querySelector('.frontend__container');

      expect(section).toBeTruthy();
    });
  });
});
