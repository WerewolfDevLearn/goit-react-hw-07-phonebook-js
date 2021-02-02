import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, addContact } from '../../redux/contacts';

import ContactFormStl from './ContactForm.module.css';

export default function ContactForm() {
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const onAddContact = (name, number) => dispatch(addContact(name, number));

  const onInputValue = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'contactName':
        setContactName(value);
        break;
      case 'contactNumber':
        setContactNumber(value);
        break;
      default:
        break;
    }
  };

  const onSubmitContact = e => {
    e.preventDefault();
    if (contacts.some(contact => contact.name === contactName)) {
      alert(`${contactName} is already in Contacts`);
      return;
    }
    onAddContact(contactName, contactNumber);
    setContactName('');
    setContactNumber('');
  };

  return (
    <form onSubmit={onSubmitContact} className={ContactFormStl.ContactForm}>
      <label className={ContactFormStl.label}>
        Name
        <input
          type="text"
          value={contactName}
          onChange={onInputValue}
          name="contactName"
          className={ContactFormStl.input}
        />
      </label>
      <label className={ContactFormStl.label}>
        Phone Number
        <input
          type="text"
          value={contactNumber}
          onChange={onInputValue}
          name="contactNumber"
          className={ContactFormStl.input}
        />
      </label>
      <button type="submit" className={ContactFormStl.buttonSubmit}>
        Add contact
      </button>
    </form>
  );
}
