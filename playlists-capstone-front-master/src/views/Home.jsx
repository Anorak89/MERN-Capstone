import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="home-content">
        <h2 className="home-title">Playlist Application</h2>
        <p className="home-description">
          Make Playlists, Share Playlists, Everything for Playlists
        </p>
        <div>
          <button
            onClick={() => navigate("/playlists")}
            className="explore-button"
          >
            Explore Playlists
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
