import { configureStore } from '@reduxjs/toolkit'
import booksReducer from '../features/books/booksSlice'
import readingListReducer from '../features/readingList/readingListSlice'

export const store = configureStore({
    reducer:{
        books: booksReducer,
        readingList: readingListReducer,
    },
})