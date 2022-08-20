/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CalculatorState {
  housePrice: string;
  dp: string;
  dpRupiah: string;
  plafond: number;
  tenor: number;
  interest: string;
  njoptkp: string;
}

export const calculatorInitialState: CalculatorState = {
  housePrice: "",
  dp: "",
  dpRupiah: "",
  plafond: 0,
  tenor: 10,
  interest: "",
  njoptkp: "60000000",
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState: calculatorInitialState,
  reducers: {
    setHousePrice: (state, action: PayloadAction<string>) => {
      state.housePrice = action.payload;
      state.dp = `${(+state.dpRupiah / +action.payload) * 100}`;
    },
    setDp: (state, action: PayloadAction<string>) => {
      const num = +action.payload;
      if (!Number.isNaN(num) && num >= 0 && num <= 100) {
        state.dp = action.payload;
        state.dpRupiah = num ? `${(num / 100) * +state.housePrice}` : "";
      }
    },
    setDpRupiah: (state, action: PayloadAction<string>) => {
      state.dpRupiah = action.payload;
      state.dp = action.payload
        ? `${(+action.payload / +state.housePrice) * 100}`
        : "";
    },
    setTenor: (state, action: PayloadAction<string>) => {
      state.tenor = +action.payload;
    },
    setInterest: (state, action: PayloadAction<string>) => {
      const num = +action.payload;
      if (!Number.isNaN(num) && num >= 0 && num <= 100) {
        state.interest = action.payload;
      }
    },
    setNjoptkp: (state, action: PayloadAction<string>) => {
      state.njoptkp = action.payload;
    },
  },
});

export const {
  setHousePrice,
  setDp,
  setDpRupiah,
  setTenor,
  setInterest,
  setNjoptkp,
} = calculatorSlice.actions;

export const calculator = calculatorSlice.reducer;
