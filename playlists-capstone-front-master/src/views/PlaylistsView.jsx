import Section from "../components/Section";
import Playlist from "../components/Playlist";
import { Container, Typography } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import {
  likePlaylistAction,
  deletePlaylistAction,
  fetchPlaylists,
} from "../reducers/playlistReducer";

const PlaylistsView = () => {
  useEffect(() => {
    dispatch(fetchPlaylists());
  }, []);

  const playlists = useSelector((state) => state.playlists);
  const loggedUser = useSelector((state) => state.loggedUser);
  const dispatch = useDispatch();

  const handleLike = (id, likes) => {
    dispatch(likePlaylistAction(id, likes));
  };

  const handleRemove = async (id) => {
    dispatch(deletePlaylistAction(id, loggedUser));
  };

  return (
  <Container>
    <Typography variant="h4" gutterBottom>Playlists</Typography>
    {playlists.map((playlist) => (
      <Section
        componentTitle={`${playlist.name} by ${playlist.creator}`}
        key={playlist.id}
      >
        <Playlist
          playlist={playlist}
          handleLike={handleLike}
          handleRemove={handleRemove}
          username={loggedUser.username}
        />
      </Section>
    ))}
  </Container>
);
};

export default PlaylistsView;
