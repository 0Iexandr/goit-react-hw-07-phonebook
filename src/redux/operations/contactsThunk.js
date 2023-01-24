import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContact, deleteContact, getContacts } from "services/API";

export const getContactsThunk = createAsyncThunk('contacts/getAll', async (_, thunkApi) => {
  try {
    const data = await getContacts();
    return data;
  } catch(error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const deleteContactsThunk = createAsyncThunk('contacts/delete', async (id, thunkApi) => {
  try {
    const data = await deleteContact(id);
    return data.id;
  } catch(error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const addContactsThunk = createAsyncThunk('contacts/add', async (contact, thunkApi) => {
  try {
    const data = await addContact(contact);
    return data;
  } catch(error) {
    return thunkApi.rejectWithValue(error.message);
  }
});