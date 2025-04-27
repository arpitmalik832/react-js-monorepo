// @flow
import { AxiosInstance } from 'axios';
import { ENVS } from '../../../build_utils/config/index.mjs';
import devStore from './store.dev.mjs';
import prodStore from './store.prod.mjs';
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
} = process.env.APP_ENV === ENVS.PROD ? prodStore : devStore;

export default store;
