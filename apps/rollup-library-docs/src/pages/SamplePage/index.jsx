/**
 * @file Sample page component.
 */
import React from 'react';
import Layout from '@theme/Layout';

/**
 * Renders a sample page with basic content structure.
 * @returns {JSX.Element} A sample page component wrapped in the docusaurus layout.
 * @example
 * // Renders the sample page
 * <SamplePage />
 */
export default function MyReactPage() {
  return (
    <Layout>
      <h1>My React page</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
