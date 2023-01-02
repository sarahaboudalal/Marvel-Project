import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import MD5 from 'crypto-js/md5';

let ts = Date.now().toString();
const privateKey = process.env.REACT_APP_API_PRIV;
const publicKey = process.env.REACT_APP_API_KEY;
const hash = MD5(ts + privateKey + publicKey).toString();
const base = process.env.REACT_APP_BASE_URL;

export const fetchEvents = createAsyncThunk('event/fetchEvents', () => {
  const url = `${base}/v1/public/events?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  return axios
    .get(url)
    .then((response) => response.data.data.results)
    .catch((error) => console.log(error));
});

const initialState = {
  loading: false,
  events: [],
  error: '',
};

const eventSlice = createSlice({
  name: 'event',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchEvents.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchEvents.fulfilled, (state, action) => {
      state.loading = false;
      state.events = action.payload;
      state.error = '';
    });
    builder.addCase(fetchEvents.rejected, (state, action) => {
      state.loading = false;
      state.events = [];
      state.error = action.error.message;
    });
  },
});

export default eventSlice.reducer
