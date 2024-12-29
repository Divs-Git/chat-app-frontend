import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import appReducer from './slices/app';

// slices

const rootPersistConfig = {
  key: 'root',
  storage,
  keyPrefix: 'redux-',
};

const rootReducer = combineReducers({
  // Add your slices here
  app: appReducer,
});

export { rootReducer, rootPersistConfig };
