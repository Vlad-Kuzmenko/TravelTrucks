import { createSelector, createSlice } from '@reduxjs/toolkit';
import { fetchQuery, fetchTruck, fetchTrucks } from './operations';

const slice = createSlice({
  name: 'trucks',
  initialState: {
    items: [],
    itemsId: [],
    loading: false,
    error: null,
    total: 0,
    page: 1,
    selectedBodyType: '',
    selectedEquipment: [],
    location: '',
  },
  reducers: {
    setPage: (state, action) => {
      state.page = action.payload;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setSelectedBodyType: (state, action) => {
      state.selectedBodyType = action.payload;
    },
    setSelectedEquipment: (state, action) => {
      state.selectedEquipment = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTrucks.pending, state => {
        state.loading = true;
      })
      .addCase(fetchTrucks.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const newItems = action.payload.items.filter(
          newItem => !state.items.some(item => item.id === newItem.id)
        );
        state.items = [...state.items, ...newItems];
        state.total = action.payload.total;
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
      })
      .addCase(fetchQuery.pending, state => {
        state.loading = true;
      })
      .addCase(fetchQuery.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        // const newItems = action.payload.items.filter(
        //   newItem => !state.items.some(item => item.id === newItem.id)
        // );
        // state.items = action.payload.replace
        //   ? newItems
        //   : [...state.items, ...newItems];
        state.items = action.payload.replace
          ? action.payload.items
          : [...state.items, ...action.payload.items];
        state.total = action.payload.total;
      })
      .addCase(fetchQuery.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {
  setPage,
  setSelectedBodyType,
  setSelectedEquipment,
  setLocation,
} = slice.actions;

export default slice.reducer;
