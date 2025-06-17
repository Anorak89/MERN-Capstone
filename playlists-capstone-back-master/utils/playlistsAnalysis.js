const getTotalSongs = (playlists) => {
  return playlists.reduce(
    (totalSongs, playlist) => totalSongs + playlist.numOfSongs,
    0
  );
};

const mostLikedPlaylist = (playlists) => {
  if (!playlists || !Array.isArray(playlists) || playlists.length === 0) {
    return null; 
  }
  const maxLikes = Math.max(...playlists.map((playlist) => playlist.likes));
  const mostLikedPlaylists = playlists.filter(
    (playlist) => playlist.likes === maxLikes
  );
  return mostLikedPlaylists.length > 0 ? mostLikedPlaylists[0] : null;
};

module.exports = { getTotalSongs, mostLikedPlaylist };
