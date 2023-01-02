import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import MD5 from 'crypto-js/md5';

let ts = Date.now().toString();
const privateKey = process.env.REACT_APP_API_PRIV;
const publicKey = process.env.REACT_APP_API_KEY;
const hash = MD5(ts + privateKey + publicKey).toString();
const base = process.env.REACT_APP_BASE_URL;

export const fetchStories = createAsyncThunk('story/fetchStories', () => {
  const url = `${base}/v1/public/stories?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  return axios
    .get(url)
    .then((resp) => resp.data.data.results)
    .catch((err) => console.log(err));
});

const initialState = {
  loading: false,
  stories: [],
  error: '',
};

const storiesSlice = createSlice({
  name: 'story',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchStories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchStories.fulfilled, (state, action) => {
      state.loading = false;
      state.stories = action.payload;
      state.error = '';
    });
    builder.addCase(fetchStories.rejected, (state, action) => {
      state.loading = false;
      state.stories = [];
      state.error = action.error.message;
    });
  },
});

export default storiesSlice.reducer