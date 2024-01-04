import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quote: null,
  author: null,
  loading: true,
};

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    updateQuote: (state, action) => {
      state.quote = action.payload.quote;
      state.author = action.payload.author;
      state.loading = false;
    },
  },
  extraReducers: builder => {},
});

export const { updateQuote } = quoteSlice.actions;

export default quoteSlice;
