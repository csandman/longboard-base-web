import { combineReducers } from 'redux';
import deckReducer from './deckReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  decksObj: deckReducer,
  searchObj: searchReducer
});