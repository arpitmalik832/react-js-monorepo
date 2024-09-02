import '@testing-library/jest-dom';

import {
  log,
  errorLog,
  warnLog,
  debugLog,
  traceLog,
  tableLog,
  infoLog,
} from '../logsUtils';

describe('logUtils unit tests', () => {
  const originalNodeEnv = process.env.APP_ENV;

  beforeEach(() => {
    jest.resetModules();
    jest.resetAllMocks();
  });

  afterEach(() => {
    process.env.APP_ENV = originalNodeEnv;
  });

  it('log unit test', () => {
    process.env.APP_ENV = 'development';
    log('test');
    process.env.APP_ENV = 'production';
    log('test');
  });

  it('errorLog unit test', () => {
    process.env.APP_ENV = 'development';
    errorLog('test');
    process.env.APP_ENV = 'production';
    errorLog('test');
  });

  it('warnLog unit test', () => {
    process.env.APP_ENV = 'development';
    warnLog('test');
    process.env.APP_ENV = 'production';
    warnLog('test');
  });

  it('debugLog unit test', () => {
    process.env.APP_ENV = 'development';
    debugLog('test');
    process.env.APP_ENV = 'production';
    debugLog('test');
  });

  it('traceLog unit test', () => {
    process.env.APP_ENV = 'development';
    traceLog('test');
    process.env.APP_ENV = 'production';
    traceLog('test');
  });

  it('tableLog unit test', () => {
    process.env.APP_ENV = 'development';
    tableLog('test');
    process.env.APP_ENV = 'production';
    tableLog('test');
  });

  it('infoLog unit test', () => {
    process.env.APP_ENV = 'development';
    infoLog('test');
    process.env.APP_ENV = 'production';
    infoLog('test');
  });
});
