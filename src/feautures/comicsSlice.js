import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import MD5 from 'crypto-js/md5';

let ts = Date.now().toString();
const privateKey = process.env.REACT_APP_API_PRIV;
const publicKey = process.env.REACT_APP_API_KEY;
const hash = MD5(ts + privateKey + publicKey).toString();
const base = process.env.REACT_APP_BASE_URL;

export const fecthComics = createAsyncThunk('comic/fetchComics', () => {
  const url = `${base}/v1/public/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  return axios
    .get(url)
    .then((response) => response.data.data.results)
    .catch((error) => console.log(error));
});

const initialState = {
  loading: false,
  comics: [],
  error: '',
};

const comicsSlice = createSlice({
  name: 'comic',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fecthComics.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fecthComics.fulfilled, (state, action) => {
      state.loading = false;
      state.comics = action.payload;
      state.error = '';
    });
    builder.addCase(fecthComics.rejected, (state, action) => {
      state.loading = false;
      state.comics = [];
      state.error = action.error.message;
    });
  },
});

export default comicsSlice.reducer