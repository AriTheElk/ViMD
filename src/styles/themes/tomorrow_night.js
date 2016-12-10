/* @flow */
import _ from 'lodash';
import type { Theme } from '../../types';
import base from './base';

/**
 * Tomorrow Night Theme
 */
const tomorrow_night: Theme = {
  header: {
    background: '#1D1F21',
  },
  editor: {
    theme: 'tomorrow_night',
  },
};

export default _.merge({}, base, tomorrow_night);
