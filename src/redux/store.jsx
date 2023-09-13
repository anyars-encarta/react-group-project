import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import missionsReducer from './reducers/missionsReducer';

// Combine reducers
const rootReducer = combineReducers({
  missions: missionsReducer,
});

// Apply middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
