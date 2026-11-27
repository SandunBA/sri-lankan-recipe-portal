import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

export default function Navbar() {
  const { user, logoutUser } = useAuth();

  return (
    <header className="navbar">
      <Link to="/" className="nav-brand">
        Sri Lankan Recipe Portal
      </Link>
      <nav className="nav-links">
        <Link to="/">Recipes</Link>
        <Link to="/categories">Categories &amp; Ingredients</Link>
        <Link to="/recipes/new">Share Recipe</Link>
        <Link to="/manage">My Recipes</Link>
        {user ? (
          <>
            <Link to="/profile">{user.username}</Link>
            <button type="button" onClick={logoutUser}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/auth">Login / Register</Link>
        )}
      </nav>
    </header>
  );
}
