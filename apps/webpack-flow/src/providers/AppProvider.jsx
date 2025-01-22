// @flow
import React from 'react';
import { ReduxProvider } from '@arpitmalik832/react-js-rollup-library';

import App from '../App';
import store from '../redux/store/store';

function AppProvider(): React.Node {
  return (
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  );
}

export default AppProvider;
