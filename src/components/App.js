import { useSelector } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { getContacts } from '../redux/contacts/contacts-selectors';
import AppStl from './App.module.css';

export default function App() {
  const contacts = useSelector(getContacts);

  return (
    <div className={AppStl.container}>
      <h2 className={AppStl.heading}>PhoneBook</h2>
      <ContactForm />
      <h2 className={AppStl.heading}>Contacts</h2>

      {contacts.length > 1 && <Filter />}

      {contacts.length > 0 && <ContactsList />}
    </div>
  );
}
