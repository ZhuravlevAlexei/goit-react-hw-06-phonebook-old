import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'ini-Rosie Simpson', number: '459-12-56' },
    // { id: 'id-2', name: 'ini-Hermione Kline', number: '443-89-12' },
  ],
  filter: '',
};

const contactsAndFilterSlice = createSlice({
  name: 'contactsAndFilter',
  initialState: initialState,
  reducers: {
    addContact(state, action) {
      // console.log('state c&f', state.contacts);
      // console.log('action ', action);
      // state.contacts.push(action.payload);
      return {
        contacts: [...state.contacts, action.payload],
        filter: state.filter,
      };
    },
    deleteContact(state, action) {
      // console.log('action ', action);
      // console.log(...state);
      return {
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
        filter: state.filter,
      };
    },
  },
});

export const selectContacts = state => state.contactsAndFilter.contacts;
export const selectFilter = state => state.contactsAndFilter.filter;

export const { addContact, deleteContact } = contactsAndFilterSlice.actions;

export default contactsAndFilterSlice.reducer;
