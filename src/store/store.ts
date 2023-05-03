import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import userReducer from './reducers/userReducer';
import product from './reducers/productReducer';
import shelves from './reducers/shelvesReducer';
import filters from './reducers/filtersReducer';
import appReducer from './reducers/appReducer';
// import other reducers

const rootReducer = combineReducers({
  app: appReducer,
  users: userReducer,
  products: product,
  shelves: shelves,
  filters: filters,
  // other reducers
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;