import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getContacts,
  getLoader,
  getError,
  fetchContacts,
} from '../redux/contacts';
import { ToastContainer } from 'react-toastify';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import Loader from './Loader/Loader';
import Error from './Error/Error';

import AppStl from './App.module.css';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const contacts = useSelector(getContacts);
  const loader = useSelector(getLoader);
  const error = useSelector(getError);

  return (
    <div className={AppStl.container}>
      <h2 className={AppStl.heading}>PhoneBook</h2>
      <ContactForm />
      <h2 className={AppStl.heading}>Contacts</h2>
      <ToastContainer />
      {contacts.length > 1 && <Filter />}
      {loader && <Loader />}
      {error && <Error />}
      {contacts.length > 0 && !loader && <ContactsList />}
    </div>
  );
}
