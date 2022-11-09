import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
    'X-RapidAPI-Key': 'e5e276cd06msh90df54307c9bbe4p1026e1jsna4ae8f1b8107',
    'X-RapidAPI-Host': 'coingecko.p.rapidapi.com'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url) => ({ url, headers: cryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi', // what reducer for
    baseQuery: fetchBaseQuery({ baseUrl }),

    endpoints: (builder) => ({
        getCryptos:  builder.query({
            query: () => createRequest('/exchanges')
        }),
        getGlobalStat: builder.query({
            query: () => createRequest('/global')
        })
    })
});


export const { useGetCryptosQuery, useGetGlobalStatQuery } = cryptoApi;