import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';

import * as ops from 'redux/contacts/operations';
import * as rds from 'redux/contacts/reducers';

// ################################################

const extraActions = [
  ops.fetchContacts,
  ops.addContact,
  ops.deleteContact,
  ops.editContact,
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    currentId: null,
  },
  reducers: {
    setSelectedContactId(state, { payload }) {
      state.currentId = payload;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(ops.fetchContacts.fulfilled, rds.handleFetchFulfilled)
      .addCase(ops.addContact.fulfilled, rds.handleAddFulfilled)
      .addCase(ops.deleteContact.fulfilled, rds.handleDeleteFulfilled)
      .addCase(ops.editContact.fulfilled, rds.handleEditFulfilled)
      .addMatcher(isFulfilled(...extraActions), rds.handleFulfilled)
      .addMatcher(isPending(...extraActions), rds.handlePending)
      .addMatcher(isRejected(...extraActions), rds.handleRejected),
});

export const { setSelectedContactId } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
