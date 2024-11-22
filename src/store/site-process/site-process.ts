import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SiteProcess } from '../../types/state';
import { StoreSlice } from '../../const';

const initialState: SiteProcess = {
  shownCards: 6,
  activeCategory: 'All',
};

export const siteProcess = createSlice({
  name: StoreSlice.SiteProcess,
  initialState,
  reducers: {
    setProductsShown: (state, action: PayloadAction<number>) => {
      state.shownCards = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.activeCategory = action.payload;
    }
  }
});

export const { setProductsShown, setCategory } = siteProcess.actions;
