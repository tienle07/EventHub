/* eslint-disable prettier/prettier */

import {createSlice} from '@reduxjs/toolkit';

interface AuthState {
  id: String;
  email: String;
  accesstoken: String;
}

const initialState: AuthState = {
  id: '',
  email: '',
  accesstoken: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authData: initialState,
  },
  reducers: {
    addAuth: (state, action) => {
      state.authData = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;

export const {addAuth} = authSlice.actions;

export const authSelector = (state: any) => state.authReducer.authData;
