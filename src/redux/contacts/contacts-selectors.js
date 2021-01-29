export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;

export const getVisibleContacts = state => {
  const allContacts = getContacts(state);
  const contactFilter = getFilter(state);

  return allContacts.filter(contact =>
    contact.name
      .toLocaleLowerCase()
      .includes(contactFilter.toLocaleLowerCase()),
  );
};
