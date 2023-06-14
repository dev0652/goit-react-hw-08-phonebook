import { createSlice, nanoid } from '@reduxjs/toolkit';

import defaultContacts from 'data/defaultContacts';

// ################################################

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: defaultContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: { name, number, id: nanoid() },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
    loadDefaults() {
      return defaultContacts;
    },
  },
});

export const { addContact, deleteContact, loadDefaults } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

// Selector
export const getContacts = state => state.contacts;
