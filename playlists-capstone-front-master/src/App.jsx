import { useEffect } from "react";
import Notification from "./components/Notification";
import Footer from "./components/Footer";

import Home from "./views/Home";
import Menu from "./components/Menu";
import Users from "./views/Users";
import LoginView from "./views/LoginView";
import PlaylistsView from "./views/PlaylistsView";
import PlaylistFormView from "./views/PlaylistFormView";
import UserDetails from "./views/UserDetails";
import { Navigate } from 'react-router-dom';
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { localStorageUser } from "./reducers/loginReducer";
import { fetchUsers } from "./reducers/usersReducer";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./views/About";

const App = () => {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.loggedUser);
  const notification = useSelector((state) => state.notification);

  useEffect(() => {
    dispatch(localStorageUser());
  }, []);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <Router>
      <Menu />
      <div className="page-container">
        {notification && <Notification />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About/>} />
          <Route 
            path="/create" 
            element={loggedUser ? <PlaylistFormView /> : <Navigate to="/login" replace />} 
          />
          <Route
            path="/login"
            element={!loggedUser ? <LoginView /> : <Home />}
          />
          <Route 
            path="/playlists" 
            element={loggedUser ? <PlaylistsView /> : <Navigate to="/login" replace />} 
          />
          <Route 
            path="/users" 
            element={loggedUser ? <Users /> : <Navigate to="/login" replace />} 
          />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
