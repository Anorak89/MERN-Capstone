import { useState } from "react";
import { createPlaylistAction } from "../reducers/playlistReducer";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const PlaylistFormView = () => {
  const [playlistName, setPlaylistName] = useState("");
  const [creator, setCreator] = useState("");
  const [numOfSongs, setNumOfSongs] = useState("");
  const [likes, setLikes] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.loggedUser);

  const handleAddPlaylist = async (event) => {
    dispatch(
      createPlaylistAction({
        name: playlistName,
        creator: creator,
        numOfSongs: numOfSongs || 0,
        likes: likes || 0,
        user: loggedUser,
      })
    );
    setPlaylistName("");
    setCreator("");
    setNumOfSongs("");
    setLikes("");
    navigate("/playlists");
  };

  return (
    <div className="playlist-form-container">
      <h3 className="playlist-form-title">Add Playlists</h3>
      <form onSubmit={handleAddPlaylist}>
        <div>
          <label htmlFor="playlist-name" className="playlist-form-label">
            Playlist Name:
          </label>
          <input
            type="text"
            id="playlist-name"
            value={playlistName}
            onChange={(e) => setPlaylistName(e.target.value)}
            className="playlist-form-input"
            data-testid="playlist-name"
          />
        </div>
        <div>
          <label htmlFor="creator" className="playlist-form-label">
            Creator:
          </label>
          <input
            type="text"
            id="creator"
            value={creator}
            onChange={(e) => setCreator(e.target.value)}
            className="playlist-form-input"
            data-testid="creator"
          />
        </div>
        <div>
          <label htmlFor="songs" className="playlist-form-label">
            Number of Songs:
          </label>
          <input
            type="number"
            id="songs"
            value={numOfSongs}
            onChange={(e) => setNumOfSongs(e.target.value)}
            className="playlist-form-input"
            data-testid="songs"
          />
        </div>
        <div>
          <label htmlFor="likes" className="playlist-form-label">
            Likes:
          </label>
          <input
            type="number"
            id="likes"
            value={likes}
            onChange={(e) => setLikes(e.target.value)}
            className="playlist-form-input"
            data-testid="likes"
          />
        </div>
        <button
          type="submit"
          className="playlist-form-button"
          data-testid="add-playlist-button"
        >
          Add Playlist
        </button>
      </form>
    </div>
  );
};

export default PlaylistFormView;
