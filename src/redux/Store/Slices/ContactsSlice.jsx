import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContacts, deleteContacts } from "../operation";


const initialState = {
    items: [],
    isLoading: false,
    error: null,
}

 

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(addContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContacts.rejected, (state, action) => {
        state.isLoading = false;
          state.error = action.error.message;
          console.log(action.payload)
      })
       .addCase(deleteContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter((contact) => contact.id !== action.payload.id);
        })
  },
});
    const { reducer: contactsReducer } = contactsSlice;
    export default contactsReducer;

