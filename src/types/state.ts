import { AuthorizationStatus, FilterRating, Sorting } from '../const';
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
  reviews: Review[];
  isReviewsLoading: boolean;
}

export type SiteProcess = {
  shownCards: number;
  activeCategory: string;
  activeTypes: string[];
  sorting: Sorting;
  filterRating: FilterRating;
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: User | null;
  isUserStatusLoading: boolean;
  isRegistration: boolean;
}

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
