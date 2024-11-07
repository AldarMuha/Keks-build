import store from '../store';
import type { Product, Review } from './types';

export type SiteData = {
  products: Product[];
  isProductsLoading: boolean;
  isLastReview: boolean;
  lastReview: null | Review;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
