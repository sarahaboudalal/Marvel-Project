import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    data: [],
    error: ''
}

const fetchHeros = createAsyncThunk('hero/fetchHero', () => {
    return axios.get('')
})

const userSlice = createSlice({
    name: 'data',
    initialState,
})