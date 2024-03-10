import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NewsResponse } from "../../types/NewsTypes";
// https://newsapi.org/account

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://newsapi.org/v2",
  }),
  endpoints: (builder) => ({
    fetchNews: builder.query<NewsResponse[], string | void>({
      query: (keyword) =>
        `everything?q=${keyword}&apiKey=${process.env.VITE_NEWS_API_KEY}`,
    }),
  }),
});

export const { useFetchNewsQuery } = newsApi;
