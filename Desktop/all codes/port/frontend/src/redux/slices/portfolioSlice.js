import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import portfolioService from '../../api/portfolio';

const initialState = {
  portfolio: null,
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

// Get portfolio data
export const getPortfolio = createAsyncThunk(
  'portfolio/get',
  async (userId, thunkAPI) => {
    try {
      return await portfolioService.getPortfolio(userId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPortfolio.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPortfolio.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.portfolio = action.payload;
      })
      .addCase(getPortfolio.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.portfolio = null;
      });
  },
});

export const { reset } = portfolioSlice.actions;
export default portfolioSlice.reducer;