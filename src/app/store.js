import { configureStore } from '@reduxjs/toolkit';
import heroReducer from '../feautures/Heroes/heroSlice';
import eventReducer from '../feautures/Events/eventsSlice';
import comicReducer from '../feautures/Comics/comicsSlice';
import seriesReducer from '../feautures/Series/seriesSlice';
import storiesReducer from '../feautures/Stories/storiesSlice';

export const store = configureStore({
  reducer: {
    hero: heroReducer,
    event: eventReducer,
    comic: comicReducer,
    serie: seriesReducer,
    story: storiesReducer,
  },
});
