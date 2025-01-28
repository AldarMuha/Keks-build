import type { AxiosError, AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { History } from 'history';
import type { Product, ProductId, Category, Review, UserAuth, User, NewReview } from '../types/types';
import { AppRoute, HttpCode } from '../const';
import { Token } from '../utils/token';
import { AppDispatch, State } from '../types/state';

const Action = {
  FETCH_PRODUCTS: 'products/fetch',
  FETCH_PRODUCT: 'products/productId-fetch',
  //SHOW_PRODUCTS_PARTS: 'products/show-parts',

  FETCH_CATEGORY: 'category/fetch',

  FETCH_FAVORITE: 'favorites/fetch',
  PUT_FAVORITE: 'favorites/put',
  DELETE_FAVORITE: 'favorites/delete',

  FETCH_REVIEWS: 'reviews/productId-fetch',
  POST_REVIEW: 'reviews/productId-post',
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
    const { api, history } = extra;
    try {
      const { data } = await api.get<ProductId>(`/v0/keks/products/${id}`);
      return data;
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === HttpCode.NotFound) {
        history.push(AppRoute.NotPage);
      }
      return Promise.reject(error);
    }
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

export const deleteFavorite = createAsyncThunk<ProductId[], ProductId['id'], { extra: Extra }>(
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

export const postReview = createAsyncThunk<Review, NewReview, { extra: Extra }>(
  Action.POST_REVIEW,
  async ({ id, positive, negative, rating }, { extra }) => {
    const { api } = extra;
    const { data } = await api.post<Review>(`/v0/keks/reviews/${id}`, { positive, negative, rating });
    return data;
  }
);

export const fetchLastReview = createAsyncThunk<Review, undefined, { extra: Extra }>(
  Action.GET_LAST_REVIEW,
  async (_, { extra }) => {
    const { api } = extra;
    const { data } = await api.get<Review>('/v0/keks/reviews/getLast');
    return data;
  }
);

export const registrationUser = createAsyncThunk<void, FormData, {
  dispatch: AppDispatch;
  state: State;
  extra: Extra;
}
>(
  Action.REGISTRATION_USER,
  async (formData, { dispatch, extra }) => {
    const { api } = extra;
    const name = formData.get('user-name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const { data } = await api.post<User>('/v0/keks/users/registration', { name, email, password });
    const { token } = data;
    Token.save(token);
    dispatch(uploadAvatarUser(formData));
  }
);

export const uploadAvatarUser = createAsyncThunk<User, FormData, { extra: Extra }>(
  Action.UPLOAD_AVATAR_USER,
  async (FormData, { extra }) => {
    const { api } = extra;
    const { data } = await api.post<User>('/v0/keks/users/upload', FormData);
    return data;
  }
);
/*
export const uploadAvatarUser = createAsyncThunk<User, UserAvatar, { extra: Extra }>(
  Action.UPLOAD_AVATAR_USER,
  async ({ avatarUrl }) => fetch('/v0/keks/users/upload', {
    method: 'POST',
    Headers: { 'Content-Type': 'multipart/form-data' },
    body: JSON.stringify({
      avatarUrl
    }),
  })
    .then((res) => res.json())
    .then((res) => res)
);
*/
export const fetchUserStatus = createAsyncThunk<User, void, { extra: Extra }>(
  Action.FETCH_USER_STATUS,
  async (_, { extra }) => {
    try {
      const { api } = extra;
      const { data } = await api.get<User>('/v0/keks/users/login');
      return data;
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === HttpCode.NoAuth) {
        Token.drop();
      }
      return Promise.reject(error);
    }

  }
);

export const loginUser = createAsyncThunk<User, UserAuth, { extra: Extra }>(
  Action.LOGIN_USER,
  async ({ email, password }, { extra }) => {
    const { api, history } = extra;
    const { data } = await api.post<User>('/v0/keks/users/login', { email, password });
    const { token } = data;
    Token.save(token);
    history.push(AppRoute.Root);
    return data;
  }
);

export const logoutUser = createAsyncThunk<void, undefined, { extra: Extra }>(
  Action.LOGOUT_USER,
  async (_, { extra }) => {
    const { api } = extra;
    await api.delete('/v0/keks/users/logout');
    Token.drop();
  });
