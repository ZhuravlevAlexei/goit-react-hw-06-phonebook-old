// import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import {
  selectName,
  selectNumber,
  updateName,
  updateNumber,
} from '../Redux/nameAndNumberSlice';

import { addContact, selectContacts } from '../Redux/contactsAndFilterSlice';

// import PropTypes from 'prop-types';

import css from './ContactForm.module.css';
import { toast } from 'react-hot-toast';

const ContactForm = () => {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  let contactName = useSelector(selectName);
  const contactNumber = useSelector(selectNumber);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  // console.log(contactName);
  // console.log(contactNumber);

  // const resetForm = () => {
  //   // setName('');
  //   // setNumber('');
  //   dispatch(updateName(''));
  //   dispatch(updateNumber(''));
  // };

  const onSubmit = evt => {
    evt.preventDefault();
    contactName = contactName.trim();
    const foundContact = contacts.find(
      cont => cont.name.toLowerCase() === contactName.toLowerCase()
    );
    if (foundContact) {
      toast.error(`${foundContact.name} is already in contact list.`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name: contactName,
      number: contactNumber,
    };
    // console.log(newContact);
    // addContact(newContact);

    dispatch(addContact(newContact));
    // resetForm();
    dispatch(updateName(''));
    dispatch(updateNumber(''));
  };

  const handleInputChange = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        // setName(value);
        dispatch(updateName(value));
        break;
      case 'number':
        // setNumber(value);
        dispatch(updateNumber(value));
        break;
      default:
        break;
    }
  };

  return (
    <form className={css.contactForm} onSubmit={onSubmit}>
      <label className={css.contactLabel}>
        Name
        <input
          className={css.contactInput}
          type="text"
          name="name"
          autoComplete="on"
          value={contactName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInputChange}
        />
      </label>
      <label className={css.contactLabel}>
        Number
        <input
          className={css.contactInput}
          type="tel"
          name="number"
          autoComplete="on"
          value={contactNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInputChange}
        />
      </label>
      <button className={css.addBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};

// ContactForm.propTypes = {
//   addContact: PropTypes.func.isRequired,
// };

export default ContactForm;
