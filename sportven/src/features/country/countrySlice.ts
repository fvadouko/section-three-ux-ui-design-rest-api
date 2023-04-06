import { createSlice } from '@reduxjs/toolkit';
import { countryItemsQuery } from '../../app/api';
import { CountryItem } from '../../interfaces';

interface CountryState {
  venueTypeItems: CountryItem[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CountryState = {
  venueTypeItems: [],
  loading: 'idle',
  error: null,
};

export const countrySlice = createSlice({
  name: 'venue',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(countryItemsQuery.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(countryItemsQuery.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.venueTypeItems = action.payload;
      })
      .addCase(countryItemsQuery.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message ?? 'Something went wrong';
      });
  },
});

export default countrySlice.reducer;
