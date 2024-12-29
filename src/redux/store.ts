import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import { rootPersistConfig, rootReducer } from './rootReducer';

const store = configureStore({
  reducer: persistReducer(rootPersistConfig, rootReducer),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

const persistor = persistStore(store);

const { dispatch } = store;

// Type definitions
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom hooks
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

export { store, persistor, dispatch, useAppSelector, useAppDispatch };
