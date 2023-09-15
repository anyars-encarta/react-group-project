import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import missionsReducer from './missions/missionsSlice';
import rocketsReducer from './rockets/rocketsSlice';

const rootReducer = combineReducers({
  missions: missionsReducer,
  rockets: rocketsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
