/**
 * @file Jest configuration for the documentation site.
 * @see https://facebook.github.io/jest/docs/en/configuration.html
 */
const config = {
  // Modules can be explicitly auto-mocked using jest.mock(moduleName).
  // https://facebook.github.io/jest/docs/en/configuration.html#automock-boolean
  automock: false, // [boolean]
  // Respect Browserify's "browser" field in package.json when resolving modules.
  // https://facebook.github.io/jest/docs/en/configuration.html#browser-boolean
  // This config option can be used here to have Jest stop running tests after the first failure.
  // https://facebook.github.io/jest/docs/en/configuration.html#bail-boolean
  bail: false, // [boolean]
  // The directory where Jest should store its cached dependency information.
  // https://facebook.github.io/jest/docs/en/configuration.html#cachedirectory-string
  // cacheDirectory: '/tmp/<path>', // [string]
  // Indicates whether the coverage information should be collected while executing the test.
  // Because this retrofits all executed files with coverage collection statements,
  // it may significantly slow down your tests.
  // https://facebook.github.io/jest/docs/en/configuration.html#collectcoverage-boolean
  // collectCoverage: false, // [boolean]
  // https://facebook.github.io/jest/docs/en/configuration.html#collectcoveragefrom-array
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/**/*.{test,spec}.{js,jsx}',
    '!src/**/*.stories.{js,jsx}',
    '!src/index.js',
    '!src/bootstrap.jsx',
    '!src/configs/**',
    '!src/enums/**',
    '!src/redux/**',
    '!src/routes/**',
    '!src/stories/**',
  ],
  // https://facebook.github.io/jest/docs/en/configuration.html#coveragedirectory-string
  coverageDirectory: '<rootDir>/coverage', // [string]
  coveragePathIgnorePatterns: ['node_modules'],
  // coverageReporters: [], // [array<string>]
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  // https://facebook.github.io/jest/docs/en/configuration.html#mapcoverage-boolean
  // mapCoverage: false, // [boolean]
  // The default extensions Jest will look for.
  // https://facebook.github.io/jest/docs/en/configuration.html#modulefileextensions-array-string
  moduleFileExtensions: ['js', 'json', 'jsx', 'node'],
  moduleDirectories: ['node_modules'], // [array<string>]
  // A map from regular expressions to module names that allow to stub out resources,
  // like images or styles with a single module.
  moduleNameMapper: {
    '@theme/Layout': '<rootDir>/src/__tests__/__mocks__/mockLayout.jsx',
    '@docusaurus/Link': '<rootDir>/src/__tests__/__mocks__/mockLink.jsx',
    '@docusaurus/useDocusaurusContext':
      '<rootDir>/src/__tests__/__mocks__/mockUseDocusaurusContext.js',
    '.+\\.(css|sass|scss)$': 'identity-obj-proxy',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/src/__tests__/__mocks__/mockAsset.js',
    '.+\\.(svg)$': '<rootDir>/src/__tests__/__mocks__/mockSvgr.jsx',
  },
  // modulePathIgnorePatterns: // [array<string>]
  // modulePaths: // [array<string>]
  // notify: false, // [boolean]
  // preset: // [string]
  // projects: // [array<string>]
  // clearMocks: // [boolean]
  // reporters: // [array<moduleName | [moduleName, options]>]
  // resetMocks: // [boolean]
  // resetModules: // [boolean]
  // resolver: // [string]
  // rootDir: // [string]
  // roots: // [array<string>]
  // setupFiles: // [array]
  // setupTestFrameworkScriptFile: // [string]
  // snapshotSerializers: // [array<string>]
  // testEnvironment:'node',
  // testMatch: // [array<string>]
  // testPathIgnorePatterns: // [array<string>]
  testRegex: '/__tests__/[a-zA-Z0-9_]*.(test|spec).jsx?$',
  // testResultsProcessor: // [string]
  // testRunner: // [string]
  // timers: // [string]
  testEnvironment: 'jest-environment-jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost:3000/',
  },
  transform: {
    '\\.(js|jsx)$': ['babel-jest', { configFile: './babel.jest.config.cjs' }],
  },
  // unmockedModulePathPatterns: // [array<string>]
  verbose: true, // [boolean],
  setupFiles: ['<rootDir>/jest.setup.js'], // [testConfig files DOM,Mock]
};

module.exports = config;
