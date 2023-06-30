import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import contactsAndFilterReducer from './contactsAndFilterSlice';
import nameAndNumberReducer from './nameAndNumberSlice';

const persistConfig = {
  key: 'items',
  storage,
  blacklist: ['nameAndNumber'],
};

const rootReducer = combineReducers({
  contactsAndFilter: contactsAndFilterReducer,
  nameAndNumber: nameAndNumberReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
