import { createSelector } from '@reduxjs/toolkit';
import { StoreSlice } from '../../const';
import { State } from '../../types/state';
import type { Product, ProductId } from '../../types/types';
import type { Review, Category } from '../../types/types';
import { getCategory } from '../site-process/selectors';

export const getIsProductsLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean =>
  SITE_DATA.isProductsLoading;
export const getProducts = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Product[] => SITE_DATA.products;
export const getIsLastReview = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean =>
  SITE_DATA.isLastReview;
export const getLastReview = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Review | null => SITE_DATA.lastReview;
export const getIsCategoriesLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean =>
  SITE_DATA.isCategoriesLoading;
export const getCategories = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Category[] => SITE_DATA.categories;
export const getIsProductLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean => SITE_DATA.isCategoriesLoading;
export const getProduct = ({ [StoreSlice.SiteData]: SITE_DATA }: State): ProductId | null => SITE_DATA.product;
export const getIsFavoritesLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean => SITE_DATA.isFavoritesLoading;
export const getFavorites = ({ [StoreSlice.SiteData]: SITE_DATA }: State): ProductId[] => SITE_DATA.favorites;
export const selectProducts = createSelector(
  [getProducts, getCategory],
  (products, category) => (category !== 'All') ? products.filter((product) => product.category === category) : products
);
