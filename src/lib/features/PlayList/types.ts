export interface AddSongResponse {
    media_id: string;
    playlist_id: string;
    created_at: string;
    updated_at: string;
    id: number;
  }
  
  export interface AddSongToPlaylistResponse {
    response: {
      code: number;
      messages: string[];
      data: AddSongResponse;
    };
  }

  export interface Playlist {
    id: number;
    name: string;
    user_id: number;
    created_at: string;
    updated_at: string;
  }
  
  export interface PlaylistState {
    playlists: Playlist[];
    loading: boolean;
    error: string | null;
  }
  
  export interface CreatePlaylistResponse {
    response: {
      code: number;
      messages: string[];
      data: Playlist;
    };
  }

  export interface PlaylistData {
    id: number;
    user_id: number;
    name: string;
    created_at: string;
    updated_at: string;
  }

  export interface FetchPlaylistsResponse {
    response: {
      code: number;
      messages: string[];
      data: PlaylistData[];
    };
  }
  