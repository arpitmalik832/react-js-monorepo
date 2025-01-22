// @flow
import React, { lazy } from 'react';
import { createBrowserRouter, Router } from 'react-router';
import { ComponentWithSuspense } from '@arpitmalik832/react-js-rollup-library';

import PageWrapper from '../components/organisms/PageWrapper';
import routes from './routes';

const Error = lazy(
  () => import(/* webpackChunkName: 'Error' */ '../pages/Error'),
);

const router: Router = createBrowserRouter([
  {
    path: '/',
    element: <PageWrapper />,
    errorElement: <ComponentWithSuspense component={<Error />} />,
    children: [...routes],
  },
]);

export default router;
