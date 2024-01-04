import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { updateQuote } from "../slices/quote-slice";

const quoteAPI = createApi({
  reducerPath: "quoteAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  endpoints: builder => ({
    getQuote: builder.query({
      query: () => "",
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;

          dispatch(updateQuote(data));
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
