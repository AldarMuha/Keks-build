import { createSlice } from '@reduxjs/toolkit';
import { StoreSlice } from '../../const';
import { fetchProducts, fetchLastReview, fetchCategory, fetchProduct } from '../action';
import { SiteData } from '../../types/state';

const initialState: SiteData = {
  products: [],
  product: null,
  isProductLoading: false,
  categories: [],
  isCategoriesLoading: false,
  /*
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
      })
      .addCase(fetchCategory.pending, (state) => {
        state.isCategoriesLoading = true;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isCategoriesLoading = false;
      })
      .addCase(fetchCategory.rejected, (state) => {
        state.isCategoriesLoading = false;
      })
      .addCase(fetchProduct.pending, (state) => {
        state.isProductLoading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.product = action.payload;
        state.isProductLoading = false;
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.isProductLoading = false;
      });
  }
});

