import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quote: null,
  loading: true,
};

const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    updateQuote: (state, action) => {
      state.quote = action.payload;
    },
  },
  extraReducers: builder => {},
});

export const { updateQuote } = quoteSlice.actions;

export default quoteSlice;
