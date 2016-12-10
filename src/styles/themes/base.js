/* @flow */
import type { Theme } from '../../types';

/**
 * This is the base theme.
 * 
 * All other themes should extend this.
 * To see the available parameters, take
 * a look at the `types.js` file.
 */
const base: Theme = {
  header: {
    height: '44px',
  },
  editor: {
  },
};

export default base;
