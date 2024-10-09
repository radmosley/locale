import '../../styling/NavBar.css'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
  <header className="bg-body-tertiary">
    <nav className="navbar navbar-expand-lg container">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">Locale</Link>
        <form className="d-flex flex-grow-1 mx-3" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>

        <div className="d-flex align-items-center">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
        {!isLoggedIn ? (
                <>
                  <li className="nav-item"><Link to="/login" className="nav-link">Login</Link></li>
                  <li className="nav-item"><Link to="/register" className="nav-link">Register</Link></li>
                </>
              ) : (
                <>
                  <li className="nav-item"><Link to="/profile" className="nav-link">Profile</Link></li>
                  <li className="nav-item">
                    <Link
                      to="/"
                      className="nav-link"
                      onClick={() => {
                        setIsLoggedIn(false); // Simulate logout
                      }}
                    >
                      Logout
                    </Link>
                  </li>
                </>
              )}
          <li className="nav-item"><Link to="/cart" className="nav-link">Cart</Link></li>
        </ul>
      </div>
    </div>
    </nav>
  </header>
  );
}

export default NavBar;
