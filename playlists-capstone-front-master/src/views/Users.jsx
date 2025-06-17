import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Users = () => {
  const users = useSelector((state) => state.users);

  if (users.length === 0) {
    return null;
  }

  return (
    <div className="users-container">
      <h2 className="users-title">Users</h2>
      <ul className="users-list">
        {users.map((user) => (
          <li key={user.id} className="users-list-item">
            <Link to={`/user/${user.id}`} className="users-link">
              {user.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
