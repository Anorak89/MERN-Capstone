import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "../reducers/loginReducer";
import playlistReducer from "../reducers/playlistReducer";
import notificationReducer from "../reducers/notificationReducer";
import usersReducer from "../reducers/usersReducer";

const store = configureStore({
  reducer: {
    loggedUser: loginReducer,
    playlists: playlistReducer,
    notification: notificationReducer,
    users: usersReducer,
  },
});

export default store;
