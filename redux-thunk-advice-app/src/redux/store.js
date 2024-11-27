import {configureStore} from '@reduxjs/toolkit'
import adviceReducer from '../features/advice/adviceSlice'

export const store = configureStore({
    reducer:{
        advice: adviceReducer,
    },
});
