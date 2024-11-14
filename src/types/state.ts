import store from '../store';
import type { Category, Product, ProductId, Review } from './types';

export type SiteData = {
  products: Product[];
  isProductsLoading: boolean;
  isLastReview: boolean;
  lastReview: null | Review;
  categories: Category[];
  isCategoriesLoading: boolean;
  isProductLoading: boolean;
  product: ProductId | null;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
