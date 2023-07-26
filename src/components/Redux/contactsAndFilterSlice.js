import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const contactsAndFilterSlice = createSlice({
  name: 'contactsAndFilter',
  initialState: initialState,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    updateFilter(state, action) {
      state.filter = action.payload;
    },
    // addContact(state, action) {
    //   return {
    //     contacts: [...state.contacts, action.payload],
    //     filter: state.filter,
    //   };
    // },
    // deleteContact(state, action) {
    //   return {
    //     contacts: state.contacts.filter(
    //       contact => contact.id !== action.payload
    //     ),
    //     filter: state.filter,
    //   };
    // },
    // updateFilter(state, action) {
    //   return {
    //     contacts: [...state.contacts],
    //     filter: action.payload,
    //   };
    // },
  },
});

export const selectContacts = state => state.contactsAndFilter.contacts;
export const selectFilter = state => state.contactsAndFilter.filter;

export const { addContact, deleteContact, updateFilter } =
  contactsAndFilterSlice.actions;

export default contactsAndFilterSlice.reducer;
