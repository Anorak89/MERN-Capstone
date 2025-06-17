import axios from "axios";
const API_URL = "/api/playlists";

let authorization = null;

const setAuthorization = (token) => {
  authorization = {
    headers: { Authorization: `Bearer ${token}` },
  };
};

const addNewPlaylist = async (newPlaylist) => {
  const response = await axios.post(API_URL, newPlaylist, authorization);
  return response.data;
};

const getPlaylists = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const updatePlaylist = async (playlistId, updatedPlaylist) => {
  const response = await axios.put(
    `${API_URL}/${playlistId}`,
    updatedPlaylist,
    authorization 
  );
  return response.data;
};

const removePlaylist = async (playlistId) => {
  const response = await axios.delete(
    `${API_URL}/${playlistId}`,
    getAuthConfig()
  );
  return response.data;
};

const getAuthConfig = () => {
  return authorization || {};
};

export default {
  getPlaylists,
  setAuthorization,
  addNewPlaylist,
  updatePlaylist,
  removePlaylist,
};
