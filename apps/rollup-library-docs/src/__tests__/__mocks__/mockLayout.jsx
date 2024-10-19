const Component = ({ title, description, children }) => (
  <div data-testid="mock-layout">
    <div data-testid="mock-layout-title">{title}</div>
    <div data-testid="mock-layout-description">{description}</div>
    <div data-testid="mock-layout-children">{children}</div>
  </div>
);

export default Component;
