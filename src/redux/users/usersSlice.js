import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = 'https://randomuser.me/api/?results=20';

const usersInitialState = {
  users: [],
  isLoading: false,
  error: undefined,
}

export const fetchUsers = createAsyncThunk('users-name/fetchUsers', async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (err) {
    return err.message;
  }
})

const usersSlice = createSlice({
  name: 'users-name',
  initialState: usersInitialState,
  extraReducers(builder) {
    builder
    .addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    })

    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
    })

    .addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = 'There is an error'
    });
  },
})

export const { extraReducers } = usersSlice.actions;
export default usersSlice;