import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Home from '../index';

jest.mock('../../components/HomepageFeatures', () => () => (
  <div data-testid="mock-home-features">HomepageFeatures</div>
));

describe('Home unit tests', () => {
  it('snapshot test', () => {
    const component = render(<Home />);

    expect(component).toMatchSnapshot();
  });
});
