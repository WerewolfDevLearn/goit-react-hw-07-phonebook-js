import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contacts/contacts-operations';
import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';

import ContactListItem from './ContactListItem/ContactListItem';
import ContactListStl from './ContactListItem/ContactListItem.module.css';

export default function ContactsList() {
  const visibleContacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onRemoveItem = id => dispatch(removeContact(id));

  return (
    <ul className={ContactListStl.contactList}>
      {visibleContacts.map(visibleContact => (
        <ContactListItem
          contact={visibleContact}
          onRemove={() => onRemoveItem(visibleContact.id)}
          key={visibleContact.id}
        />
      ))}
    </ul>
  );
}
