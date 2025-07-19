import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io';

export const fetchTrucks = createAsyncThunk(
  'trucks/fetchAll',
  async (page = 1, thunkApi) => {
    try {
      const response = await axios.get('/campers', {
        params: {
          page,
          limit: 4,
        },
      });
      return {
        items: response.data.items,
        total: response.data.total,
      };
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const fetchTruck = createAsyncThunk(
  'trucks/fetchTruck',
  async (id, thunkApi) => {
    try {
      const response = await axios.get(`/campers/${id}`);
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const fetchQuery = createAsyncThunk(
  'trucks/fetchQuery',
  async ({ page = 1, location = '', form = '', equipment = [] }, thunkApi) => {
    try {
      const params = {
        page,
        limit: 4,
        location,
        form,
        ...equipment.reduce((acc, equip) => ({ ...acc, [equip]: true }), {}),
      };

      const response = await axios.get('/campers', { params });

      return {
        items: response.data.items,
        total: response.data.total,
      };
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
