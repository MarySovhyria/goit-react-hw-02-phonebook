import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from './Slices/ContactsSlice'
import { filterReducer } from "redux/Store/Slices/FilterSlice";

export const store = configureStore({
  reducer: {
        contacts: contactsReducer,
      filter: filterReducer
  },
});
