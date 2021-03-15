import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import PreviousExperience from '../pages/PreviousExperience';

describe('Given a PreviousExperience component', () => {
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
    test('Then there should be a previous__container section', () => {
      act(() => {
        render(
          <BrowserRouter>
            <PreviousExperience />
          </BrowserRouter>,
          container,
        );
      });

      const section = document.querySelector('.previous__container');

      expect(section).toBeTruthy();
    });
  });
});
