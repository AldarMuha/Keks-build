import { AuthorizationStatus } from '../const';
import store from '../store';
import type { Category, Product, ProductId, Review, User } from './types';

export type SiteData = {
  products: Product[];
  isProductsLoading: boolean;
  isLastReview: boolean;
  lastReview: null | Review;
  categories: Category[];
  isCategoriesLoading: boolean;
  isProductLoading: boolean;
  product: ProductId | null;
  isFavoritesLoading: boolean;
  favorites: ProductId[];
}

export type SiteProcess = {
  shownCards: number;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: User | string;
  isUserStatusLoading: boolean;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
