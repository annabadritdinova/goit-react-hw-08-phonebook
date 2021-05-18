import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import phonebookReducer from './phonebook/phonebook-reducer';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

const allContacts = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer:{
  auth: allContacts,
    contacts: phonebookReducer,
},
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);