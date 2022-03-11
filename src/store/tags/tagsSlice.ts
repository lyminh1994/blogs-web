import { createAsyncThunk, createSlice, SerializedError } from '@reduxjs/toolkit';
import { RootState } from 'store';
import http from 'utils/http';

export interface TagsState {
  tags: string[];
  status: 'idle' | 'loading' | 'failed';
  error?: SerializedError;
}

const initialState: TagsState = {
  tags: [],
  status: 'idle',
};

export const fetchTagsAsync = createAsyncThunk('tags/fetch', async () => {
  const response = await http.get('/tags');
  return response.data.contents;
});

export const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTagsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTagsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.tags = action.payload;
      })
      .addCase(fetchTagsAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error;
      });
  },
});

export const tagsSelector = (state: RootState) => state.tags;

export default tagsSlice.reducer;
