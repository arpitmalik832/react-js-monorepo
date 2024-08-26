import '@testing-library/jest-dom';

import { library } from '../../library';

describe('testing library', () => {
  it('should return a string', () => {
    expect(library()).toBe('Hello from library');
  });
});
