/**
 * Error Page unit tests.
 * @file This file is saved as `Error.test.jsx`.
 */
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';

import Component from '../Error';

describe('Unit tests for Error Page', () => {
  afterEach(cleanup);

  it('snapshot test', () => {
    const component = render(<Component />);

    expect(component).toMatchSnapshot();
  });
});
