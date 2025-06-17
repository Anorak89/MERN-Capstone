import { createSlice } from "@reduxjs/toolkit";
import playlistService from "../services/playlistService";
import { notify } from "./notificationReducer";

const initialState = [];

const playlistSlice = createSlice({
  name: "playlists",
  initialState,
  reducers: {
    getPlaylists: (state, action) => {
      return action.payload;
    },
    setPlaylists: (state, action) => {
      return action.payload;
    },
    createPlaylist: (state, action) => {
      state.push(action.payload);
    },
    likePlaylist: (state, action) => {
      return [...state].map((playlist) =>
        playlist.id === action.payload.id
          ? { ...playlist, likes: action.payload.likes }
          : playlist
      );
    },
    deletePlaylist: (state, action) => {
      return [...state].filter((playlist) => playlist.id !== action.payload);
    },
  },
});

export const {
  getPlaylists,
  setPlaylists,
  createPlaylist,
  likePlaylist,
  deletePlaylist,
} = playlistSlice.actions;

export default playlistSlice.reducer;

export const fetchPlaylists = () => {
  return async (dispatch) => {
    const playlists = await playlistService.getPlaylists();
    dispatch(setPlaylists(playlists));
  };
};

export const likePlaylistAction = (id, updateData) => {
  return async (dispatch) => {
    await playlistService.updatePlaylist(id, updateData);
    dispatch(likePlaylist({ id, likes: updateData.likes }));
  };
};

export const deletePlaylistAction = (id, user) => {
  return async (dispatch) => {
    try {
      playlistService.setAuthorization(user.token);
      await playlistService.removePlaylist(id);
      dispatch(notify({ message: "Delete successfull", type: "info" }));
      dispatch(deletePlaylist(id));
    } catch (error) {
      dispatch(notify({ message: "Error deleting playlist", type: "warning" }));
    }
  };
};

export const createPlaylistAction = ({
  name,
  creator,
  numOfSongs,
  likes,
  user,
}) => {
  return async (dispatch) => {
    try {
      playlistService.setAuthorization(user.token);
      const playlist = await playlistService.addNewPlaylist({
        name,
        creator,
        numOfSongs,
        likes,
      });
      playlist.user = user;
      dispatch(createPlaylist(playlist));
      dispatch(
        notify({
          message: `New Playlist (${playlist.name}) added!`,
          type: "info",
        })
      );
    } catch (error) {
      dispatch(notify({ message: "Error creating playlist", type: "warning" }));
    }
  };
};
