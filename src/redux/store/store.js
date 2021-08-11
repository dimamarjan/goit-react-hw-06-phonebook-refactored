import { configureStore } from '@reduxjs/toolkit'
import items from 'redux/slices/items'
import filter from 'redux/slices/filter'

const rootReducer = {
    items,
    filter
}

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== "production"
})

export default store;