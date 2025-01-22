// @flow
import { AxiosInstance } from 'axios';
import { thunk } from 'redux-thunk';
import { logger } from 'redux-logger';
import { slices } from '@arpitmalik832/react-js-rollup-library';
import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/extensions
import { sampleQuery } from '../queries/sampleQuery.js';

type APIData = {
  host: string,
  headers: Record<string, string | Record<string, string>>,
  axiosInstance: AxiosInstance,
};

type ApisRedux = APIData[];

type NavigationRedux = {
  stack: VoidFunctionWithParams<mixed>[],
};

const store: {
  app: AppRedux,
  apis: ApisRedux,
  navigation: NavigationRedux,
  sampleQuery: typeof sampleQuery.reducer,
} = configureStore({
  reducer: {
    app: slices.appSlice.reducer,
    apis: slices.apisSlice.reducer,
    navigation: slices.navigationSlice.reducer,
    sampleQuery: sampleQuery.reducer,
  },
  middleware: getDefault =>
    getDefault({
      serializableCheck: {
        ignoredActions: [
          'apis/addNewApiData',
          'navigation/pushStack',
          'sampleQuery/executeQuery/rejected',
          'sampleQuery/executeQuery/fulfilled',
        ],
        ignoredPaths: ['apis', 'sampleQuery', 'navigation'],
      },
    }).concat(sampleQuery.middleware, thunk, logger),
});

export default store;
