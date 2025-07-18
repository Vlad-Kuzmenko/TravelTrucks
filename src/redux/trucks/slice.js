import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchTruck, fetchTrucks } from './operations';

const slice = createSlice({
  name: 'trucks',
  initialState: {
    items: [],
    itemsId: [],
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTrucks.pending, state => {
        state.loading = true;
      })
      .addCase(fetchTrucks.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTrucks.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchTruck.pending, state => {
        state.loading = true;
      })
      .addCase(fetchTruck.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.itemsId = action.payload;
      })
      .addCase(fetchTruck.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default slice.reducer;
