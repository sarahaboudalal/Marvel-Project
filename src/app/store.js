import { configureStore } from "@reduxjs/toolkit";
import heroReducer from "../feautures/heroSlice";
import eventReducer from "../feautures/eventsSlice";
import comicReducer from "../feautures/comicsSlice";

export const store = configureStore({
    reducer: {
        hero: heroReducer,
        event: eventReducer,
        comic: comicReducer
    }
})