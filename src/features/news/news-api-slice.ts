import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// https://newsapi.org/account

interface NewsArticle {
  urlToImage: string;
  title: string;
  source: {
    name: string;
  };
  url: string;
}

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://newsapi.org/v2",
  }),
  endpoints: (builder) => ({
    fetchNews: builder.query<NewsArticle[], string | void>({
      query: (keyword) =>
        `everything?q=${keyword}&apiKey=${process.env.VITE_NEWS_API_KEY}`,
    }),
  }),
});

export const { useFetchNewsQuery } = newsApi;
