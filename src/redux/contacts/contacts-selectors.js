import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getLoader = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (allContacts, contactFilter) =>
    allContacts.filter(contact =>
      contact.name
        .toLocaleLowerCase()
        .includes(contactFilter.toLocaleLowerCase()),
    ),
);
