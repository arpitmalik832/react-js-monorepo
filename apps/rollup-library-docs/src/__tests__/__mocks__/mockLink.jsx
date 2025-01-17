/**
 * @file Mock Link component for testing.
 */
/**
 * Mock Link component for testing purposes that displays className and to props in separate divs.
 * @param {object} root0 - The component props object.
 * @param {string} root0.className - CSS class name to be applied to the component.
 * @param {string} root0.to - The destination URL or path.
 * @returns {JSX.Element} A div containing the className and to props for testing.
 * @example
 * // Using the mock Link component in tests
 * <Component className="test-class" to="/test-path" />
 */
const Component = ({ className, to }) => (
  <div data-testid="mock-link">
    <div data-testid="mock-link-classname">{className}</div>
    <div data-testid="mock-link-to">{to}</div>
  </div>
);

export default Component;
