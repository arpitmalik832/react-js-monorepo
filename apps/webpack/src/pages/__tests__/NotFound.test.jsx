/**
 * NotFound Page unit tests.
 * @file This file is saved as `NotFound.test.jsx`.
 */
import { cleanup, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Component from '../NotFound';

describe('Unit tests for NotFound Page', () => {
  afterEach(cleanup);
  it('snapshot test', () => {
    const component = render(<Component />);

    expect(component).toMatchSnapshot();
  });
});
