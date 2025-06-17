import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../reducers/usersReducer";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const UserDetails = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const id = useParams().id;

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsers());
    }
  }, [dispatch, users.length]);

  const user = users.find((user) => user.id === id);

  if (!user) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <TableContainer component={Paper}>
      <Typography variant="h5" sx={{ m: 2 }}>
        Playlists by {user.name}
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Songs</TableCell>
            <TableCell>Likes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.playlists.map((playlist) => (
            <TableRow key={playlist.id}>
              <TableCell>{playlist.name}</TableCell>
              <TableCell>{playlist.numOfSongs}</TableCell>
              <TableCell>{playlist.likes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserDetails;
