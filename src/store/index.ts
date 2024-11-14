import { configureStore } from '@reduxjs/toolkit';
import { rootReduser } from './reducer';
import { createApi } from '../services/api';
import { fetchCategory, fetchLastReview, fetchProducts } from './action';

const api = createApi();
const store = configureStore({
  reducer: rootReduser,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api
        }
      }
    })
});

store.dispatch(fetchProducts());
store.dispatch(fetchLastReview());
store.dispatch(fetchCategory());

export default store;
