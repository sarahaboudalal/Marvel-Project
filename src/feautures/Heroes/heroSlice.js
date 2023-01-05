import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import MD5 from 'crypto-js/md5';

let ts = Date.now().toString();
const privateKey = process.env.REACT_APP_API_PRIV;
const publicKey = process.env.REACT_APP_API_KEY;
const hash = MD5(ts + privateKey + publicKey).toString();
const base = process.env.REACT_APP_BASE_URL;

export const fetchHeroes = createAsyncThunk('hero/fetchHeroes', () => {
  const url = `${base}/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
  return axios
    .get(url)
    .then((response) => response.data.data.results)
    .catch((err) => console.log(err));
});

// export const fetchHero = createAsyncThunk('hero/fetchHero', async (id) => {
//   const url = `${base}/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
//   return axios
//     .get(url)
//     .then((resp) => {
//       const heroDetails = resp.data.data.results;
//       const data =  heroDetails.map((detail) => {
//         return { ...detail };
//       });
//       console.log(data)
//       return data
//     })
//     .catch((err) => console.log(err));
// });
const initialState = {
  loading: false,
  heroes: [],
  // hero: [],
  error: '',
};

const heroSlice = createSlice({
  name: 'hero',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchHeroes.pending, (state) => {
        state.loading = true;
        state.heroes = [];
        state.error = '';
      })
      .addCase(fetchHeroes.fulfilled, (state, action) => {
        state.loading = false;
        state.heroes = action.payload;
        state.error = '';
      })
      .addCase(fetchHeroes.rejected, (state, action) => {
        state.loading = false;
        state.heroes = [];
        state.error = action.error.message;
      })
      // .addCase(fetchHero.pending, (state) => {
      //   state.loading = true;
      // })
      // .addCase(fetchHero.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.hero = action.payload;
      //   state.error = '';
      // })
      // .addCase(fetchHero.rejected, (state, action) => {
      //   state.loading = false;
      //   state.hero = [];
      //   state.error = action.error.message;
      // });
  },
});

export default heroSlice.reducer;
