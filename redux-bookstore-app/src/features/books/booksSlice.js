import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'

export const fetchBooks = createAsyncThunk('books/fetchBooks', async (query) =>{
    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    const data = await res.json();
    console.log(data.items);
    return data.items;
    
})

const bookSlice = createSlice({
    name:'books',
    initialState:{
        books:[],
        status: 'idle', // states: 'idle' | 'loading' | 'succeeded' | 'failed' provided by redux-toolkit
        error:null,
        filters:{
            category:'',
            author:'',
        }
    },
    reducers:{
        setCategoryFilter: (state, action) => {
            state.filters.category = action.payload;
          },
          setAuthorFilter: (state, action) => {
            state.filters.author = action.payload;
          },
    },
    extraReducers:(builder) => {
        builder
          .addCase(fetchBooks.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchBooks.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.books = action.payload;
          })
          .addCase(fetchBooks.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          });
      },
})

export const {setCategoryFilter, setAuthorFilter} = bookSlice.actions
export default bookSlice.reducer;