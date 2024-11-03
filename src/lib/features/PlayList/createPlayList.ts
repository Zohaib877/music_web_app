import { get, post, remove } from "@/utils/axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  AddSongResponse,
  AddSongToPlaylistResponse,
  CreatePlaylistResponse,
  FetchPlaylistsResponse,
  Playlist,
  PlaylistData,
  PlaylistState,
} from "./types";

export const createPlaylist = createAsyncThunk<
  Playlist,
  FormData,
  { rejectValue: string }
>("playlist/createPlaylist", async (formData, { rejectWithValue }) => {
  try {
    const response = await post({
      url: "playlist/create",
      data: formData,
      includeToken: true,
    });
    const data: CreatePlaylistResponse = response;
    return data.response.data;
  } catch (error: any) {
    return rejectWithValue(error?.message || "An error occurred");
  }
});

export const addSongToPlaylist = createAsyncThunk<
  AddSongResponse,
  FormData,
  { rejectValue: string }
>("playlist/addSongToPlaylist", async (formData, { rejectWithValue }) => {
  try {
    const response = await post({
      url: "playlist/addsong",
      data: formData,
      includeToken: true,
    });

    const data: AddSongToPlaylistResponse = response;
    return data.response.data;
  } catch (error: any) {
    return rejectWithValue(error?.message || "An error occurred");
  }
});

export const removeSongFromPlaylist = createAsyncThunk<
  AddSongResponse,
  FormData,
  { rejectValue: string }
>("playlist/removeSongFromPlaylist", async (formData, { rejectWithValue }) => {
  try {
    const response = await remove({
      url: "playlist/removemedia",
      data: formData,
      includeToken: true,
    });

    const data: AddSongToPlaylistResponse = response;
    return data.response.data;
  } catch (error: any) {
    return rejectWithValue(
      error?.message || "An error occurred while removing the song"
    );
  }
});

export const fetchPlaylists = createAsyncThunk<PlaylistData[], void, { rejectValue: string }>(
    'playlist/fetchPlaylists',
    async (_, { rejectWithValue }) => {
      try {
        const response = await get({
          url: 'playlist/index',
          includeToken: true,
        });
  
        const data: FetchPlaylistsResponse = response;
        return data.response.data; // Return the playlists array
      } catch (error: any) {
        return rejectWithValue(error?.message || 'An error occurred while fetching playlists');
      }
    }
  );

const initialState: PlaylistState = {
  playlists: [],
  loading: false,
  error: null,
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPlaylist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        createPlaylist.fulfilled,
        (state, action: PayloadAction<Playlist>) => {
          state.loading = false;
          state.playlists.push(action.payload);
        }
      )
      .addCase(createPlaylist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to create playlist";
      })
      .addCase(addSongToPlaylist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        addSongToPlaylist.fulfilled,
        (state, action: PayloadAction<AddSongResponse>) => {
          state.loading = false;
          // You could update a specific playlist's song list here if needed
        }
      )
      .addCase(addSongToPlaylist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to add song to playlist";
      })
      .addCase(removeSongFromPlaylist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        removeSongFromPlaylist.fulfilled,
        (state, action: PayloadAction<AddSongResponse>) => {
          state.loading = false;
        }
      )
      .addCase(removeSongFromPlaylist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to remove song from playlist";
      })
      .addCase(fetchPlaylists.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPlaylists.fulfilled, (state, action: PayloadAction<PlaylistData[]>) => {
        state.loading = false;
        state.playlists = action.payload; 
      })
      .addCase(fetchPlaylists.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch playlists';
      });
  },
});

export default playlistSlice.reducer;
