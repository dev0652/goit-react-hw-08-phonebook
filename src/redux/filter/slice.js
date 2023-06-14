import { createSlice } from '@reduxjs/toolkit';

// ##################################

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    updateFilter(_, { payload }) {
      return payload;
    },
  },
});

export const { updateFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;

// Selector
export const getFilterValue = state => state.filter;
