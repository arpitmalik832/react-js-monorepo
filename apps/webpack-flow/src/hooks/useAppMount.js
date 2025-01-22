// @flow
import { useTheme } from '@arpitmalik832/react-js-rollup-library';

// eslint-disable-next-line import/extensions
import useInitAxios from './useInitAxios.js';

function useAppMount(): void {
  useTheme();
  useInitAxios();
}

export default useAppMount;
