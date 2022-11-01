import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://bing-news-search1.p.rapidapi.com/news',
    params: {safeSearch: 'Off', textFormat: 'Raw'},
    headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': 'e5e276cd06msh90df54307c9bbe4p1026e1jsna4ae8f1b8107',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    }
};

export const fetchNewsDataAsync = createAsyncThunk(
    "news/fetch",
    async (payload, thunkAPI) => {
        try {
            console.log('news')
            const res  = await axios.request(options);
            console.log(res.data)
            console.log(res.status)

            return res.data
        }
        catch (error) {
            console.log(error)
        }

    }
)

const initialState = {
    isReceived: false,
    loading: false,
    error: '',
    data: null,
}

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchNewsDataAsync.pending, (state) => {
            state.isReceived = false
            state.loading = true
            state.error = "";
        });
        builder.addCase(fetchNewsDataAsync.fulfilled, (state, action) => {
            state.isReceived = true
            state.loading = false
            state.data = action.payload
        });
        builder.addCase(fetchNewsDataAsync.rejected, (state, action) => {
            state.data = action.payload
            state.isReceived = false
            state.loading = false
            state.error = action.error.message
        });
    },
})

export default newsSlice.reducer;
