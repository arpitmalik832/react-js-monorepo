/**
 * @file Mock Layout component for testing.
 * */
/**
 * Mock Layout component for testing purposes that displays title, description and children in separate divs.
 * @param {object} root0 - The component props object.
 * @param {string} root0.title - The title to be displayed in the layout.
 * @param {string} root0.description - The description text to be displayed.
 * @param {React.ReactNode} root0.children - The child elements to be rendered within the layout.
 * @returns {JSX.Element} A div containing the title, description and children for testing.
 * @example
 * // Using the mock Layout component in tests
 * <Component
 *   title="Test Title"
 *   description="Test Description"
 * >
 *   <div>Child content</div>
 * </Component>
 */
const Component = ({ title, description, children }) => (
  <div data-testid="mock-layout">
    <div data-testid="mock-layout-title">{title}</div>
    <div data-testid="mock-layout-description">{description}</div>
    <div data-testid="mock-layout-children">{children}</div>
  </div>
);

export default Component;
