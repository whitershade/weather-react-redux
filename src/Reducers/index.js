import { combineReducers } from 'redux';
import weather from './Weather';

const appReducer = combineReducers({
  weather,
});

export default appReducer;
