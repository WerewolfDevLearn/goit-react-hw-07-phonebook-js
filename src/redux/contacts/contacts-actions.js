import { v4 as uuid4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contact/Add', (name, number) => ({
  payload: {
    id: uuid4(),
    name,
    number,
  },
}));

export const removeContact = createAction('contact/Remove');

export const filterContacts = createAction('contact/Filter');
