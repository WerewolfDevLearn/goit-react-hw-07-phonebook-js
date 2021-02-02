import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function addContact(contact) {
  return axios.post('/contacts', contact).then(({ data }) => data);
}

export const deleteContact = contactId => {
  return axios.delete(`/contacts/${contactId}`);
};
