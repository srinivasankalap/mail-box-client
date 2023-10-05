import { configureStore } from "@reduxjs/toolkit";
import  authReducer from './authSlice'
import composeReducer from './compose-slice';
const store = configureStore({
    reducer:{
        authentication:authReducer,
        compose:composeReducer
    }
})
export default store