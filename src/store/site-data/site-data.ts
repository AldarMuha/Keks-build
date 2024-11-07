import { createSlice } from '@reduxjs/toolkit';
import { StoreSlice } from '../../const';
import { fetchProducts, fetchLastReview } from '../action';
import { SiteData } from '../../types/state';

const initialState: SiteData = {
  products: [],
  /*product: null,
  category: [],
  favorites: [],
  */
  isProductsLoading: false,
  /*
  isProductLoading: false,
  isFavoriteLoading: false,
  */
  isLastReview: false,
  lastReview: null,
};

export const siteData = createSlice({
  name: StoreSlice.SiteData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isProductsLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isProductsLoading = false;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isProductsLoading = false;
      })
      .addCase(fetchLastReview.pending, (state) => {
        state.isLastReview = true;
      })
      .addCase(fetchLastReview.fulfilled, (state, action) => {
        state.lastReview = action.payload;
        state.isLastReview = false;
      })
      .addCase(fetchLastReview.rejected, (state) => {
        state.isLastReview = false;
      });
  }
});

