import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SiteProcess } from '../../types/state';
import { StoreSlice } from '../../const';

const initialState: SiteProcess = {
  shownCards: 6,
};

export const siteProcess = createSlice({
  name: StoreSlice.SiteProcess,
  initialState,
  reducers: {
    setProductsShown: (state, action: PayloadAction<number>) => {
      state.shownCards = action.payload;
    }
  }
});

export const { setProductsShown } = siteProcess.actions;
