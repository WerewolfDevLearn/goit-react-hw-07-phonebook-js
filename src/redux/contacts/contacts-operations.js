import * as contactsActions from './contacts-actions';
import * as contactsAPI from '../../services/contacts-api';

export const fetchContacts = () => async dispatch => {
  dispatch(contactsActions.fetchContactsRequest());
  try {
    const items = await contactsAPI.fetchContacts();

    dispatch(contactsActions.fetchContactsSuccess(items));
  } catch (error) {
    dispatch(contactsActions.fetchContactsError(error.message));
  }
};

export const addContact = (contactName, contactNumber) => async dispatch => {
  const contact = {
    name: contactName,
    number: contactNumber,
  };
  dispatch(contactsActions.addContactRequest());

  try {
    contactsAPI
      .addContact(contact)
      .then(data => dispatch(contactsActions.addContactSuccess(data)));
  } catch (error) {
    dispatch(contactsActions.addContactError(error.message));
  }
};

export const removeContact = id => async dispatch => {
  dispatch(contactsActions.deleteContactRequest());
  try {
    contactsAPI
      .deleteContact(id)
      .then(() => dispatch(contactsActions.deleteContactSuccess(id)));
  } catch (error) {
    contactsActions.deleteContactRequest(error.message);
  }
};
