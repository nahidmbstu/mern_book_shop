import { combineReducers } from 'redux';
import messages from './messages';

import bookReduecer from './bookReduecer';

export default combineReducers({
  messages,
  bookReduecer

});
