import {createSlice} from '@reduxjs/toolkit'

export const recipesSlice = createSlice({
    name: 'recipies',
    initialState: {value:[{id:1542789,ingredients:"some ingredients", instructions:"some instructions", category:'italian'}]},
    reducers: {
        add: (state, action) => {
          state.value = [...state.value, action.payload];
        },
        removeById: (state, action) => {
          const remainingRecipies = state.value.filter(
            (v) => v.id !== action.payload
          );
          state.value = remainingRecipies;
        },
        setRecipes: (state, action) => {
          state.value = action.payload;
        },
      }
})

export const {add, removeById, setRecipes} = recipesSlice.actions;
export default recipesSlice.reducer;