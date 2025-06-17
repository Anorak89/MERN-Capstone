import { Card, CardContent, Typography, Button, Stack } from '@mui/material';

const Playlist = ({ playlist, handleLike, username, handleRemove }) => {
  const addLike = () => {
  handleLike(playlist.id, { likes: playlist.likes + 1 });
};

  const removePlaylist = () => {
    if (window.confirm(`Remove Playlist ${playlist.name}?`)) {
      handleRemove(playlist.id);
    }
  };

  return (
    <Card variant="outlined" sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">
          {playlist.name} by {playlist.creator}
        </Typography>
        <Typography>{playlist.numOfSongs} songs</Typography>
        
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography>{playlist.likes} likes</Typography>
          <Button 
            variant="contained" 
            size="small" 
            onClick={addLike}
          >
            Like
          </Button>
        </Stack>
        
        <Typography variant="body2" color="text.secondary">
          Added by <em>{playlist.user.username}</em>
        </Typography>
        
        {playlist.user.username === username && (
          <Button 
            variant="outlined" 
            color="error" 
            size="small"
            onClick={removePlaylist}
            sx={{ mt: 1 }}
          >
            Remove Playlist
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default Playlist;
