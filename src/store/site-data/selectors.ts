import { StoreSlice } from '../../const';
import { State } from '../../types/state';
import type { Product } from '../../types/types';
import type { Review } from '../../types/types';

export const getIsProductsLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean =>
  SITE_DATA.isProductsLoading;
export const getProducts = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Product[] => SITE_DATA.products;
export const getIsLastReview = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean =>
  SITE_DATA.isLastReview;
export const getLastReview = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Review => SITE_DATA.lastReview;
