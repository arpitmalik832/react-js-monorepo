/**
 * @file Mock fetch for testing.
 */
/**
 * Creates a mock fetch function for testing purposes that can either resolve with provided data or reject with an error.
 * @param {any} data - The data to be returned when the fetch promise resolves.
 * @param {boolean} isRejected - Flag to determine if the fetch should reject (true) or resolve (false).
 * @returns {jest.Mock} A Jest mock function that simulates the fetch API behavior.
 * @example
 * // Using the fetch mock to resolve with data
 * const mockFetch = fetchMock({ success: true }, false);
 *
 * // Using the fetch mock to reject with error
 * const mockFailedFetch = fetchMock(null, true);
 */
const fetchMock = (data, isRejected) =>
  jest.fn().mockImplementation(() => {
    if (isRejected) {
      return Promise.reject(new Error('xyz'));
    }
    return Promise.resolve(data);
  });

export default fetchMock;
