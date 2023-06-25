import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from 'services/api';

// Operation generator
const generateOperation = type => {
  // 1. Generate the payloadCreator callback for createAsyncThunk
  const payloadCreator = type => async arg => await api[type](arg ? arg : '');
  // 2. . Generate the thunk action creator
  return createAsyncThunk(`auth/${type}`, payloadCreator(type));
};

// Generated operations
export const register = generateOperation('register');
export const login = generateOperation('login');
export const logout = generateOperation('logout');
export const refresh = generateOperation('refresh');