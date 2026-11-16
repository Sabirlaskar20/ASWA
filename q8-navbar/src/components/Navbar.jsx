import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>LibraryMS</h2>
      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/books">Books</NavLink>
        <NavLink to="/members">Members</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;