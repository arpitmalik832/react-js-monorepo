// @flow
import React, { useEffect } from 'react';
import {
  useBackPress,
  Button,
  log,
} from '@arpitmalik832/react-js-rollup-library';
import { useSelector } from 'react-redux';

import ButtonV2 from '../../components/atoms/Button';
import { ReactComponent as ReactIcon } from '../../assets/icons/react.svg';
import { useFetchDataQuery } from '../../redux/queries/sampleQuery';

/**
 * Home component renders the home page with buttons.
 * @returns {import('react').JSX.Element} The rendered component.
 * @example
 * <Home />
 */
function Home(): React.Node {
  const apis = useSelector(state => state.apis);

  useBackPress();
  const { data, isLoading, isError } = useFetchDataQuery(
    apis[0]?.axiosInstance,
  );

  useEffect(() => {
    log({ isLoading, data, isError });
  }, [isLoading, data, isError]);

  return (
    <div>
      Home
      <Button />
      <ButtonV2 />
      <ReactIcon />
    </div>
  );
}

export default Home;
