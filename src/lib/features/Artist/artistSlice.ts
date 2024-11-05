import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Artist } from "../Home/homeSlice";
import { get } from "@/utils/axios";

interface GroupedArtists {
    [key: string]: Artist[]; // Changed to directly hold arrays of artists for each language category
}

interface ArtistState {
    groupedArtists: GroupedArtists; // No longer needs language metadata
    topArtists: Artist[];
    loading: boolean;
    error: string | null;
}

export const fetchArtists = createAsyncThunk<
    { grouped_artists: GroupedArtists; top_artists: Artist[] },
    void,
    { rejectValue: string }
>("artists/fetchArtists", async (_, { rejectWithValue }) => {
    try {
        const response = await get({
            url: "artist/index",
            includeToken: true,
        });
        return {
            grouped_artists: response.data,
            top_artists: response.data.top_artists || [],
        };
    } catch (error: any) {
        return rejectWithValue(error?.message || "Failed to fetch artists");
    }
});


const initialState: ArtistState = {
    groupedArtists: {},
    topArtists: [],
    loading: false,
    error: null,
};

const artistSlice = createSlice({
    name: "artists",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArtists.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                fetchArtists.fulfilled,
                (state, action: PayloadAction<{ grouped_artists: GroupedArtists; top_artists: Artist[] }>) => {
                    state.loading = false;
                    state.groupedArtists = action.payload.grouped_artists; // This now holds the language categories as keys
                    state.topArtists = action.payload.top_artists;
                }
            )
            .addCase(fetchArtists.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch artists";
            });
    },
});

export default artistSlice.reducer;