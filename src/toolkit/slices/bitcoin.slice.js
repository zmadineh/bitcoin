import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {appid} from "../../data/appid";

export const fetchBitcoinDataAsync = createAsyncThunk(
    "bitcoin/fetch",
    async (payload, thunkAPI) => {
        const res = await axios.get(
            ``);
        return res.data;
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

export default bitcoinSlice.reducer;
