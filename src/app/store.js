import { configureStore } from "@reduxjs/toolkit";
import heroReducer from "../feautures/heroSlice";

export const store = configureStore({
    reducer: {
        hero: heroReducer,
    }
})