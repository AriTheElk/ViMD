/* @flow */
import _ from 'lodash';
import type { Theme } from '../../types';
import base from './base';

/**
 * Cobalt Theme
 */
const cobalt: Theme = {
  header: {
    background: '#00223E',
  },
  editor: {
    theme: 'cobalt',
  },
};

export default _.merge({}, base, cobalt);
