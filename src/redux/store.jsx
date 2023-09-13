import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import missionsReducer from './reducers/missionsReducer';
import rocketsReducer from './rockets/rocketsSlice';

// Combine reducers
const rootReducer = combineReducers({
  missions: missionsReducer,
  rockets: rocketsReducer,
});

// Apply middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
