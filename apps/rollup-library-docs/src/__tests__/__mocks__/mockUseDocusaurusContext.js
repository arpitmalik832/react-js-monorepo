/**
 * @file Mock useDocusaurusContext hook for testing.
 * @example
 */
/**
 * Mock implementation of the useDocusaurusContext hook for testing purposes.
 * Provides a static configuration object with mock values for site settings.
 * @returns {object} Mock site configuration object containing title, tagline, URLs and project details.
 * @example
 * // Using the mock hook in tests
 * const { siteConfig } = mockUseDocusaurusContext();
 * console.log(siteConfig.title); // 'mock title'
 */
const mockUseDocusaurusContext = () => ({
  siteConfig: {
    title: 'mock title',
    tagline: 'mock tagline',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    projectName: 'mock project',
    organizationName: 'mock org',
  },
});

export default mockUseDocusaurusContext;
