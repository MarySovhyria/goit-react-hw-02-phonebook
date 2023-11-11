import { createSelector } from "@reduxjs/toolkit";

export const  selectContacts = state => state.contacts.items;

export const selectFilters = state => state.filter;

export const selectLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilters],
    (contacts, filtered) => {

        return contacts.filter(({ name }) =>
            name.toLowerCase().includes(filtered.toLowerCase())
        )
    }
)
