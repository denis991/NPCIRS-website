import { combineReducers } from 'redux';
import territoryReducer from './territoryReducer';

const rootReducer = combineReducers({
  territory: territoryReducer
});

export default rootReducer;
