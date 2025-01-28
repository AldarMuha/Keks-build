import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SiteProcess } from '../../types/state';
import { FilterRating, Sorting, StoreSlice } from '../../const';

const initialState: SiteProcess = {
  shownCards: 6,
  activeCategory: 'All',
  activeTypes: [],
  sorting: Sorting.DateAscending,
  filterRating: FilterRating.Any,
};

export const siteProcess = createSlice({
  name: StoreSlice.SiteProcess,
  initialState,
  reducers: {
    setProductsShown: (state, action: PayloadAction<number>) => {
      state.shownCards = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.activeTypes = [];
      state.activeCategory = action.payload;
    },
    setSorting: (state, action: PayloadAction<Sorting>) => {
      state.sorting = action.payload;
    },
    setFilter: (state, action: PayloadAction<FilterRating>) => {
      state.filterRating = action.payload;
    },
    addType: (state, action: PayloadAction<string>) => {
      state.activeTypes.push(action.payload);
    },
    deleteType: (state, action: PayloadAction<string>) => {
      state.activeTypes = state.activeTypes.filter((activeType) => activeType !== action.payload);
    },
  }
});

export const { setProductsShown, setCategory, addType, deleteType, setSorting, setFilter } = siteProcess.actions;
