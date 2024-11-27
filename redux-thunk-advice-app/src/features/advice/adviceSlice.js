import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

//thunk tasks
export const fetchAdvice = createAsyncThunk('advice/fetchAdvice', async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    return data.slip.advice;
})

export const adviceSlice = createSlice({
    name: 'advice',
    initialState: {value:''},
    reducers:{},
    extraReducers: (builder) =>{
        builder.addCase(fetchAdvice.fulfilled, (state,action)=>{
            state.advice = action.payload;
        })
    }
});

export default adviceSlice.reducer;