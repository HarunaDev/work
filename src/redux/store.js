import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import { generalApiSlice } from "./apiSlice";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    app: appReducer,
    [generalApiSlice.reducerPath]: generalApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(generalApiSlice.middleware),
});

// Optional, enables refetchOnFocus/refetchOnReconnect behaviors
// See `setupListeners` docs - accepts an optional callback for customization
setupListeners(store.dispatch);
