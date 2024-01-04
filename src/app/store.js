import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import quoteSlice from "./slices/quote-slice";
import quoteAPI from "./services/fetch-quote.service";

const store = configureStore({
  reducer: {
    quote: quoteSlice.reducer,
    quoteAPI: quoteAPI.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(quoteAPI.middleware),
});

setupListeners(store.dispatch);

export default store;
