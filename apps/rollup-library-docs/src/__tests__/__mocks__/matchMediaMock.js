/**
 * @file Mock matchMedia for testing.
 */
/**
 * Mock implementation of the window.matchMedia function for testing purposes.
 * @param {string} query - The media query string to match against.
 * @param {boolean} matches - Whether the media query matches or not.
 * @returns {object} A mock MediaQueryList object with standard properties and jest mock functions.
 * @example
 * // Using the matchMedia mock in tests
 * const mediaQuery = matchMediaMock('(min-width: 768px)', true);
 * console.log(mediaQuery.matches); // true
 * console.log(mediaQuery.media); // '(min-width: 768px)'
 */
const matchMediaMock = (query, matches) => ({
  matches,
  media: query,
  onchange: null,
  addListener: jest.fn(), // Deprecated
  removeListener: jest.fn(), // Deprecated
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
});

export default matchMediaMock;
