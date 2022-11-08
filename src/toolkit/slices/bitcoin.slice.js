import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

// const options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//         referenceCurrencyUuid: 'yhjMzLPhuIDl',
//         timePeriod: '24h',
//         'tiers[0]': '1',
//         orderBy: 'marketCap',
//         orderDirection: 'desc',
//         limit: '50',
//         offset: '0'
//     },
//     headers: {
//         'X-RapidAPI-Key': 'e5e276cd06msh90df54307c9bbe4p1026e1jsna4ae8f1b8107',
//         'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//     }
// };

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
    async (payload, thunkAPI) => {
        try {
            console.log('bitcoin')
            // const res  = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=250&page=1&sparkline=false',
            //     {headers: {'Accept': 'application/json',}})
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

const bitcoinSlice = createSlice({
    name: 'bitcoin',
    initialState,
    reducers: {
        addMarkToAll: (state) => {
            state.bitcoin.forEach(coin => {
                coin.marked = false;
            });
        },
        addMark: (state, action) => {
            const payload = action.payload;
            const coin = state.bitcoin.find(coin => coin.id === action.payload.id)
            if (coin)
                coin.marked = true;
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
            state.data = action.payload
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
    addMarkToAll,
    addMark,
} = bitcoinSlice.actions;

export default bitcoinSlice.reducer;
