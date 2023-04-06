import { createAsyncThunk } from '@reduxjs/toolkit';

export const venueTypeItemsQuery = createAsyncThunk(
  'api/venueTypeItemsQuery',
  async (_) => {
    const response = await fetch(
      'http://localhost:5128/api/VenuesTypes'
    );
    const data = await response.json();
    return data;
  }
);

export const countryItemsQuery = createAsyncThunk(
  'api/countryItemsQuery',
  async (_) => {
    const response = await fetch(
      'http://localhost:5128/api/Countries'
    );
    const data = await response.json();
    return data;
  }
);
