import { configureStore } from '@reduxjs/toolkit';

import contactsAndFilterReducer from './contactsAndFilterSlice';
import nameAndNumberReducer from './nameAndNumberSlice';

const store = configureStore({
  reducer: {
    contactsAndFilter: contactsAndFilterReducer,
    nameAndNumber: nameAndNumberReducer,
  },
});

export default store;
