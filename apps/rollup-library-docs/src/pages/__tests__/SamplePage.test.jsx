import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import SamplePage from '../SamplePage';

describe('SamplePage unit tests', () => {
  it('snapshot test', () => {
    const component = render(<SamplePage />);

    expect(component).toMatchSnapshot();
  });
});
