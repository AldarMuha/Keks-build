import { configureStore } from '@reduxjs/toolkit';
import { rootReduser } from './reducer';
import { createApi } from '../services/api';
import { fetchCategory, fetchLastReview, fetchProducts, fetchUserStatus } from './action';
import history from '../history';

const api = createApi();
const store = configureStore({
  reducer: rootReduser,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          api,
          history,
        }
      }
    })
});

store.dispatch(fetchUserStatus());
store.dispatch(fetchProducts());
store.dispatch(fetchLastReview());
store.dispatch(fetchCategory());

export default store;
