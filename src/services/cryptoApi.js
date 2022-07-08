import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': 'd7e8085c12msh7dfb23ee6e3475ap11b327jsnc9d8cf1af0ac'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url , headers : cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath : 'cryptoApi',
    baseQuery : fetchBaseQuery({ baseUrl }),
    endpoints : (builder) => ({
        getCryptos : builder.query({
            query : (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptodetails :  builder.query({
            query : (coinId) => createRequest(`/coins/${coinId}`),
        }),
        getCryptoHistory : builder.query({
            query : ({ coinId , timeperiod }) => createRequest(`/coin/${coinId}/history/${timeperiod}`),
        })
    })
});

export const {
    useGetCryptosQuery,
    useGetCryptodetailsQuery,
    useGetCryptoHistoryQuery
} = cryptoApi;