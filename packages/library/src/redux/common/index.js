/**
 * This file is used to export all the common redux utilities.
 * @file This file is saved as `src/redux/common/index.js`.
 */

export { useDispatch, useSelector } from 'react-redux';
export { configureStore } from '@reduxjs/toolkit';
export { default as logger } from 'redux-logger';
export { thunk } from 'redux-thunk';
