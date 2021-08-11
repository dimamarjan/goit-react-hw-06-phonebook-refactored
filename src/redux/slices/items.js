import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
    name: 'items',
    initialState: [],
    reducers: {
        addContact: (state, action) => [...state, action.payload],
        delContact: (state, action) => state.filter(contact => contact.id !== action.payload)
    },
});

export const { addContact, delContact } = itemsSlice.actions;
export default itemsSlice.reducer;