import { createSlice } from '@reduxjs/toolkit';
import { addContactsThunk, deleteContactsThunk, getContactsThunk } from 'redux/operations/contactsThunk';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {items: [], error: null, isLoading: false},
  extraReducers: builder => { builder
    .addCase(getContactsThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(getContactsThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = action.payload;
    })
    .addCase(getContactsThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(deleteContactsThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(deleteContactsThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = state.items.filter(contact => contact.id !== action.payload);
    })
    .addCase(deleteContactsThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(addContactsThunk.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(addContactsThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.items = [action.payload, ...state.items];
    })
    .addCase(addContactsThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
  }
});