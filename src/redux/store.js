import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contacts-reducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
