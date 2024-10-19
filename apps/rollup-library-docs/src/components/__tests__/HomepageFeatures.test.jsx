import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import HomepageFeatures from '../HomepageFeatures';

describe('HomepageFeatures unit tests', () => {
  it('snapshot test', () => {
    const component = render(<HomepageFeatures />);

    expect(component).toMatchSnapshot();
  });
});
