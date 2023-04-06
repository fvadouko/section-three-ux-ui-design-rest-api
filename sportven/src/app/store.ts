// src/app/store.js

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import venueTypeItemsReducer from '../features/venue/venueSlice';
import countryItemsReducer from '../features/country/countrySlice';

const rootReducer = combineReducers({
  venueTypeItems: venueTypeItemsReducer,
  countryItems: countryItemsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
