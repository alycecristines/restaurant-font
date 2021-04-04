import { combineReducers } from 'redux';

import LoginReducer from './loginReducer';

const reducers = combineReducers({ login: LoginReducer });

export default reducers;
