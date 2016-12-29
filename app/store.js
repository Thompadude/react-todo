// ====================================================
// The main store file.
// TODO READ http://redux.js.org/docs/basics/Store.html
// ====================================================

import { createStore } from 'redux';
import popup from './reducers/popup';

export default createStore(popup)