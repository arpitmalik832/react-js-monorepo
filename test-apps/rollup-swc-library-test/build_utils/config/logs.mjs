/**
 * This file contains all the logs that are used in the build process.
 * @file This file is saved as `build_utils/config/logs.js`.
 */
import chalk from 'chalk';

const ERR_NO_APP_ENV_FLAG =
  'You must pass the APP_ENV flag into your build for vite to work!';
const ERR_NO_BE_ENV_FLAG =
  'You must pass the BE_ENV flag into your build for vite to work!';

/**
 * Logs a success message indicating the server has started.
 * @param {number} port - The port number where the server started.
 * @example
 * SERVER_STARTED_SUCCESSFULLY(3000);
 */
function SERVER_STARTED_SUCCESSFULLY(port) {
  chalk.green(`Server started at ${port} successfully !!!`);
}

export { ERR_NO_APP_ENV_FLAG, ERR_NO_BE_ENV_FLAG, SERVER_STARTED_SUCCESSFULLY };
