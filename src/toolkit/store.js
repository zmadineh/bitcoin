import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import bitcoinSlice from "./slices/bitcoin.slice";
import newsSlice from "./slices/news.slice";


// const persistConfig = {
//     key: "root",
//     storage,
// };

// const rootReducer = combineReducers({
//     bitcoin: bitcoinSlice,
//     news: newsSlice,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: { bitcoin: bitcoinSlice, news: newsSlice,},
    // reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// export const persistor = persistStore(store);
export default store;

