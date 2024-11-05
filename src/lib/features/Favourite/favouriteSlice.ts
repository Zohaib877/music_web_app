import { get, post, remove } from '@/utils/axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { MediaItem } from '../Tops/TopsSlice';
import { successToast } from '@/utils/toast';
import { removeFromQueue } from '../Player/mediaPlayerSlice';
import store from '@/lib/store';


interface FavouriteState {
    messages: string[];
    error: string | null;
    loading: boolean;
    favoriteSongs: MediaItem[];
}

const initialState: FavouriteState = {
    messages: [],
    error: null,
    loading: false,
    favoriteSongs: [],
};

export const fetchFavoriteSongs = createAsyncThunk(
    'favourite/fetchFavoriteSongs',
    async () => {
        const response = await get({
            url: 'favouritesong/favorite-songs',
            includeToken: true,
        });
        return response.data;
    }
);

export const addFavourite = createAsyncThunk(
    'favourite/toggleFavorite',
    async ({ mediaId, type }: { mediaId: number; type: string }) => {
        const response = await get({
            url: `favorites/${mediaId}/${type}`,
            includeToken: true,
        });
        return { mediaId, success: response.code === 200 };
    }
);


export const removeFavourite = createAsyncThunk(
    'favourite/removeFavourite',
    async ({ mediaId, type }: { mediaId: number; type: string }) => {
        const response = await get({
            url: `favorites/remove/${mediaId}/${type}`,
            includeToken: true,
        });
        return { mediaId, success: response.code === 200 };
    }
);


const favouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchFavoriteSongs.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchFavoriteSongs.fulfilled, (state, action: PayloadAction<MediaItem[]>) => {
                state.loading = false;
                state.favoriteSongs = action.payload;
            })
            .addCase(fetchFavoriteSongs.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload ? action.payload.join(', ') : null;
            })
            .addCase(addFavourite.pending, (state) => {
                state.loading = true;
                state.messages = [];
                state.error = null;
            })
            .addCase(addFavourite.fulfilled, (state, action: PayloadAction<{ mediaId: number; success: boolean }>) => {
                state.loading = false;
                if (action.payload.success) {
                    const songIndex = state.favoriteSongs.findIndex(song => song.id === action.payload.mediaId);
                    if (songIndex > -1) {
                        state.favoriteSongs[songIndex].is_favorite = true;
                    } else {
                        // If not already in the list, you may want to add it
                        // You can fetch the new song's details and add it if needed
                    }
                    state.messages.push('Song added to favorites'); // Update messages
                }
            })
            .addCase(addFavourite.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload ? action.payload.join(', ') : null;
            })
            .addCase(removeFavourite.pending, (state) => {
                state.loading = true;
                state.messages = [];
                state.error = null;
            })
            .addCase(removeFavourite.fulfilled, (state, action: PayloadAction<{ mediaId: number; success: boolean }>) => {
                state.loading = false;
                if (action.payload.success) {
                    state.favoriteSongs = state.favoriteSongs.filter(song => song.id !== action.payload.mediaId); 
                    if (action.payload.mediaId) {
                        store.dispatch(removeFromQueue(action.payload.mediaId));
                    }
                    state.messages.push('Song removed from favorites');
                }
            })
            .addCase(removeFavourite.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload ? action.payload.join(', ') : null;
            });
    },
});

export default favouriteSlice.reducer;