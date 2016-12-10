/* @flow */
import _ from 'lodash';
import type { Theme } from '../../types';
import base from './base';

/**
 * Twilight Theme
 */
const twilight: Theme = {
  header: {
    background: '#1D1F21',
  },
  editor: {
    theme: 'twilight',
  },
};

export default _.merge({}, base, twilight);
