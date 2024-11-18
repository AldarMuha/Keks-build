import type {/* AxiosError, */AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Product, ProductId, Category, Review, UserAuth, User, UserRegistration } from '../types/types';
import axios from 'axios';
//import { HttpCode } from '../const';

const Action = {
  FETCH_PRODUCTS: 'products/fetch',
  FETCH_PRODUCT: 'products/productId-fetch',
  //SHOW_PRODUCTS_PARTS: 'products/show-parts',

  FETCH_CATEGORY: 'category/fetch',

  FETCH_FAVORITE: 'favorites/fetch',
  PUT_FAVORITE: 'favorites/put',
  DELETE_FAVORITE: 'favorites/delete',

  FETCH_REVIEWS: 'reviews/productId-fetch',
  POST_REVIEWS: 'reviews/productId-post',
  GET_LAST_REVIEW: 'reviews/productId-getLast',

  REGISTRATION_USER: 'user/registration',
  UPLOAD_AVATAR_USER: 'user/upload-avatar',
  FETCH_USER_STATUS: 'user/fetch/status',
  LOGIN_USER: 'user/login',
  LOGOUT_USER: 'user/logout'
};

type Extra = {
  api: AxiosInstance;
  history: History;
}

export const fetchProducts = createAsyncThunk<Product[], undefined, { extra: Extra }>(
  Action.FETCH_PRODUCTS,
  async (_, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Product[]>('/v0/keks/products');
    return data;
  }
);

//export const showProductsParts = createAction<number>(Action.SHOW_PRODUCTS_PARTS);

export const fetchProduct = createAsyncThunk<ProductId, Product['id'], { extra: Extra }>(
  Action.FETCH_PRODUCT,
  async (id, { extra }) => {
    const { api } = extra;
    //try {
    const { data } = await api.get<ProductId>(`/v0/keks/products/${id}`);
    return data;
    /* } catch (error) {
       const axiosError = error as AxiosError;
       if (axiosError.response?.status === HttpCode.NotFound) {
         history.back();
       }
       return Promise.reject(error);
     }*/
  });

export const fetchCategory = createAsyncThunk<Category[], undefined, { extra: Extra }>(
  Action.FETCH_CATEGORY,
  async (_, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Category[]>('/v0/keks/categories');
    return data;
  }
);

export const fetchFavorite = createAsyncThunk<ProductId[], undefined, { extra: Extra }>(
  Action.FETCH_FAVORITE,
  async (_, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<ProductId[]>('/v0/keks/favorites');
    return data;
  }
);

export const putFavorite = createAsyncThunk<ProductId[], ProductId['id'], { extra: Extra }>(
  Action.PUT_FAVORITE,
  async (id, { extra }) => {
    const { api } = extra;
    const { data } = await api.put<ProductId[]>(`/v0/keks/favorites/${id}`);
    return data;
  }
);

export const deleteFavorite = createAsyncThunk<ProductId[], Product['id'], { extra: Extra }>(
  Action.DELETE_FAVORITE,
  async (id, { extra }) => {
    const { api } = extra;
    const { data } = await api.delete<ProductId[]>(`/v0/keks/favorites/${id}`);
    return data;
  }
);

export const fetchReviews = createAsyncThunk<Review[], Product['id'], { extra: Extra }>(
  Action.FETCH_REVIEWS,
  async (id, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Review[]>(`/v0/keks/reviews/${id}`);
    return data;
  }
);
/*
export const postReview = createAsyncThunk<Review[], NewReview, { extra: Extra }>(
  Action.POST_REVIEWS,
  async ({ id, positive, negative, rating }, { extra }) => {
    const { api } = extra;
    const { data } = await api.post<Review[]>(`/v0/keks/reviews/${id}`, { positive, negative, rating });
    return data;
  }
);
*/
export const fetchLastReview = createAsyncThunk<Review, undefined, { extra: Extra }>(
  Action.GET_LAST_REVIEW,
  async (_, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Review>('/v0/keks/reviews/getLast');
    return data;
  }
);

export const registrationUser = createAsyncThunk<User, UserRegistration, { extra: Extra }>(
  Action.REGISTRATION_USER,
  async ({ name, email, password }, { extra }) => {
    const { api } = extra;
    const { data } = await api.post<User>('/v0/keks/users/registration', { name, email, password });
    return data;
  }
);
/*
export const uploadAvatarUser = createAsyncThunk<User,
*/

export const fetchUserStatus = createAsyncThunk<User, void, { extra: Extra }>(
  Action.FETCH_USER_STATUS,
  async (_, { extra }) => {
    try {
      const { api } = extra;
      const { data } = await api.get<User>('/v0/keks/users/login');
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw error;
      } else {
        throw new Error('error');
      }
    }

  }
);

export const loginUser = createAsyncThunk<User, UserAuth, { extra: Extra }>(
  Action.LOGIN_USER,
  async ({ email, password }, { extra }) => {
    const { api } = extra;
    const { data } = await api.post<User>('/v0/keks/users/login', { email, password });
    return data;
  }
);

export const logoutUser = createAsyncThunk<void, undefined, { extra: Extra }>(
  Action.LOGOUT_USER,
  async (_, { extra }) => {
    const { api } = extra;
    await api.delete('/v0/keks/users/logout');
  });
