import { createSlice } from '@reduxjs/toolkit';
import { venueTypeItemsQuery } from '../../app/api';
import { VenueTypeItem } from '../../interfaces';

interface VenueTypeState {
  venueTypeItems: VenueTypeItem[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: VenueTypeState = {
  venueTypeItems: [],
  loading: 'idle',
  error: null,
};

export const venueSlice = createSlice({
  name: 'venue',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(venueTypeItemsQuery.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(venueTypeItemsQuery.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.venueTypeItems = action.payload;
      })
      .addCase(venueTypeItemsQuery.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.error.message ?? 'Something went wrong';
      });
  },
});

export default venueSlice.reducer;
