import { configureStore } from "@reduxjs/toolkit";
import { calculator } from "@/features";

const store = configureStore({
  reducer: {
    calculator,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
