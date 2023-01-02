import { configureStore } from "@reduxjs/toolkit";
import heroReducer from "../feautures/heroSlice";
import eventReducer from "../feautures/eventsSlice";
import comicReducer from "../feautures/comicsSlice";
import seriesReducer from "../feautures/seriesSlice";
import storiesReducer from "../feautures/storiesSlice";

export const store = configureStore({
    reducer: {
        hero: heroReducer,
        event: eventReducer,
        comic: comicReducer,
        serie: seriesReducer,
        story: storiesReducer
    }
})