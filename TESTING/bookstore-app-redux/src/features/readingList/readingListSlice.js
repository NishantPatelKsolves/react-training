import {createSlice} from '@reduxjs/toolkit'

const readingListSlice = createSlice({
    name: 'readingList',
    initialState: [],
    reducers:{
        addBook:(state,action)=>{
            const book = action.payload;
            if (!state.find((b) => b.id === book.id)) {
                state.push(book);
            }
        },
        removeBook: (state, action) => {
            return state.filter((book) => book.id !== action.payload);
          },
    },
})

export const { addBook, removeBook } = readingListSlice.actions;

export default readingListSlice.reducer;