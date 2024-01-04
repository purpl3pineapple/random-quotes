import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { updateQuote } from "../slices/quote-slice";

const quoteAPI = createApi({
  reducerPath: "quoteAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.quotable.io",
  }),
  endpoints: builder => ({
    getQuote: builder.query({
      query: () => ({
        url: "/quotes/random",
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          const { author, content: quote } = data[0];

          dispatch(updateQuote({ quote, author }));
        } catch (error) {
          console.log("Couldn't get random quote...", { error });
        }
      },
    }),
  }),
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
});

export default quoteAPI;
