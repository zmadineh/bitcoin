import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://coingecko.p.rapidapi.com/coins/markets',
    params: {vs_currency: 'usd', page: '1', per_page: '100', order: 'market_cap_desc'},
    headers: {
        'X-RapidAPI-Key': 'e5e276cd06msh90df54307c9bbe4p1026e1jsna4ae8f1b8107',
        'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
    }
};

export const fetchBitcoinDataAsync = createAsyncThunk(
    "bitcoin/fetch",
    async () => {
        try {
            const res  = await axios.request(options);
            // console.log('fetch', res.data)
            return res.data
        }
        catch (error) {
            // console.log(error)
        }
    }
)

const initialState = {
    isReceived: false,
    loading: false,
    error: '',
    data: null,
}

const bitcoinSlice = createSlice({
    name: 'bitcoin',
    initialState,
    reducers: {
        addMark: (state, action) => {
            const coin = state.data.find(coin => coin.id === action.payload.id)
            if (coin)
                coin.marked = true;
        },
        removeMark: (state, action) => {
            const coin = state.data.find(coin => coin.id === action.payload.id)
            if (coin)
                coin.marked = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchBitcoinDataAsync.pending, (state) => {
            state.isReceived = false
            state.loading = true
            state.error = "";
        });
        builder.addCase(fetchBitcoinDataAsync.fulfilled, (state, action) => {
            state.isReceived = true
            state.loading = false
            state.data = action.payload //.forEach(coin => coin.marked = false)
        });
        builder.addCase(fetchBitcoinDataAsync.rejected, (state, action) => {
            state.data = action.payload
            state.isReceived = false
            state.loading = false
            state.error = action.error.message
        });
    },
})

export const {
    addMark,
    removeMark,
} = bitcoinSlice.actions;

export default bitcoinSlice.reducer;
