const { themes } = require('prism-react-renderer');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: 'My Site',
    tagline: 'Dinosaurs are cool',
    url: 'https://staging--react-js-rollup-library-monorepo.netlify.app/',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'arpitmalik832', // Usually your GitHub org/user name.
    projectName: 'library', // Usually your repo name.
    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
            // Please change this to your repo.
            editUrl:
              'https://github.com/arpitmalik832/react-js-rollup-library-monorepo-starter/docs/',
          },
          blog: {
            showReadingTime: true,
            // Please change this to your repo.
            editUrl:
              'https://github.com/arpitmalik832/react-js-rollup-library-monorepo-starter/blog/',
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        navbar: {
          title: 'My Site',
          logo: {
            alt: 'My Site Logo',
            src: 'img/logo.svg',
          },
          items: [
            {
              type: 'doc',
              docId: 'intro',
              position: 'left',
              label: 'Tutorial',
            },
            { to: '/blog', label: 'Blog', position: 'left' },
            {
              href: 'https://github.com/arpitmalik832/react-js-rollup-library-monorepo-starter/',
              label: 'GitHub',
              position: 'right',
            },
            {
              type: 'docsVersionDropdown',
              label: 'Version',
              position: 'right',
            },
          ],
        },
        prism: {
          theme: themes.github,
          darkTheme: themes.dracula,
        },
        typesense: {
          typesenseCollectionName: 'docs',
          typesenseServerConfig: {
            nodes: [
              {
                host: 'hbwtonpgf08uav1dp-1.a1.typesense.net',
                port: '443',
                protocol: 'https',
              },
            ],
            apiKey: '6MJJBbWsWS4bbPpOThKjg9wzNkjNbPaJ',
          },
          // Optional: Typesense search parameters
          typesenseSearchParameters: {},
          // Optional: path to Typesense search page
          contextualSearch: true,
        },
      }),
    plugins: [
      [
        'docusaurus-theme-search-typesense',
        {
          // The typesense options are already configured in your themeConfig
        },
      ],
    ],
  }
);
