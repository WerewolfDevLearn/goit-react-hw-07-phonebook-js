import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';

const initialState = [];

const initialFilter = '';

const items = createReducer(initialState, {
  [actions.fetchContactsSuccess]: (_, action) => action.payload,
  [actions.addContactSuccess]: (state, action) => [...state, action.payload],
  [actions.deleteContactSuccess]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const isLoading = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,

  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,

  [actions.deleteContactRequest]: () => true,
  [actions.deleteContactSuccess]: () => false,
  [actions.deleteContactError]: () => false,
});

const error = createReducer(null, {
  [actions.fetchContactsError]: (_, action) => action.payload,
  [actions.addContactError]: (_, action) => action.payload,
  [actions.deleteContactError]: (_, action) => action.payload,
});

const filter = createReducer(initialFilter, {
  [actions.filterContacts]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
  isLoading,
  error,
});
