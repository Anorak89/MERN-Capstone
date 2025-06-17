import { logoutUser } from "../reducers/loginReducer";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

const Menu = () => {
  const loggedUser = useSelector((state) => state.loggedUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Button component={Link} to="/" color="inherit">Home</Button>
        <Button component={Link} to="/about" color="inherit">About Us</Button>
        {loggedUser && (
          <>
            <Button component={Link} to="/playlists" color="inherit">Playlists</Button>
            <Button component={Link} to="/users" color="inherit">Users</Button>
            <Button component={Link} to="/create" color="inherit">Add Playlist</Button>
          </>
        )}
        
        <div style={{ marginLeft: 'auto' }}>
          {loggedUser ? (
            <>
              <Typography variant="subtitle1" display="inline" sx={{ mr: 2 }}>
                Howdy, {loggedUser.username}!
              </Typography>
              <Button variant="outlined" color="inherit" onClick={handleLogout}>
                Log Out
              </Button>
            </>
          ) : (
            <Button component={Link} to="/login" color="inherit">
              Login
            </Button>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Menu;
