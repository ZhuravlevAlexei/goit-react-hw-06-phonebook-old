// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';

import { useSelector } from 'react-redux';

import { selectContacts, selectFilter } from './Redux/contactsAndFilterSlice';

import css from './App.module.css';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactElement from './ContactElement/ContactElement';
import { Toaster } from 'react-hot-toast';

// const CONTACTS_STORAGE_KEY = 'CONTACTS';

// const getInitialContacts = () => {
//   let initialArray = [];
//   const serializedState = localStorage.getItem(CONTACTS_STORAGE_KEY);
//   if (serializedState) {
//     initialArray = JSON.parse(serializedState);
//   }
//   if (initialArray.length === 0) {
//     initialArray = [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ];
//   }
//   return initialArray;
// };

const App = () => {
  // const [contacts, setContacts] = useState(getInitialContacts());
  // const [filter, setFilter] = useState('');

  const contacts = useSelector(selectContacts);
  // console.log(contacts);
  const filter = useSelector(selectFilter);
  // console.log(filter);

  // useEffect(() => {
  //   try {
  //     const serializedState = JSON.stringify(contacts);
  //     localStorage.setItem(CONTACTS_STORAGE_KEY, serializedState);
  //   } catch (error) {
  //     console.error(error.message);
  //   }
  // }, [contacts]);

  // const deleteContact = id => {
  //   // setContacts(contacts.filter(contact => contact.id !== id));
  // };

  // const addContact = contact => {
  // const foundContact = contacts.find(
  //   cont => cont.name.toLowerCase() === contact.name.toLowerCase()
  // );
  // if (foundContact) {
  //   alert(`${foundContact.name} is already in contacts.`);
  //   return;
  // }
  // contact.id = nanoid();
  // setContacts([contact, ...contacts]);
  // };

  const handleFilterChange = evt => {
    // const { value } = evt.currentTarget;
    // setFilter(value);
  };

  // const loFilter = filter.toLowerCase();
  // const contactsCash = contacts.filter(contact => {
  //   return contact.name.toLowerCase().includes(loFilter);
  // });

  return (
    <div className={css.phonebookArea}>
      <div>
        <Toaster />
      </div>
      <h3 className={css.mainTitle}>Phonebook</h3>
      {/* <ContactForm addContact={addContact} /> */}
      <ContactForm />
      <h3>Contacts</h3>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <ContactList>
        <ContactElement contactsCash={contacts} />
      </ContactList>
    </div>
  );
};

export default App;
