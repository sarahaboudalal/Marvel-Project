import { configureStore } from "@reduxjs/toolkit";
import heroReducer from "../feautures/heroSlice";
import eventReducer from "../feautures/eventsSlice";

export const store = configureStore({
    reducer: {
        hero: heroReducer,
        event: eventReducer
    }
})