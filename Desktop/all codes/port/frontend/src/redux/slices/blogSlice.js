import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import blogService from '../../api/blog';

const initialState = {
  posts: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

// Get all blog posts
export const getBlogPosts = createAsyncThunk(
  'blog/getAll',
  async (params, thunkAPI) => {
    try {
      return await blogService.getBlogPosts(params);
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

// Create blog post
export const createBlogPost = createAsyncThunk(
  'blog/create',
  async (postData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await blogService.createBlogPost(postData, token);
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

export const blogSlice = createSlice({
  name: 'blog',
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
      .addCase(getBlogPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.posts = action.payload;
      })
      .addCase(getBlogPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.posts = [];
      })
      .addCase(createBlogPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createBlogPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.posts.unshift(action.payload);
      })
      .addCase(createBlogPost.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = blogSlice.actions;
export default blogSlice.reducer;