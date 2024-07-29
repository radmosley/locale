import '../../styling/NavBar.css'
// import { Outlet, Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="app-header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <h1><a className="navbar-brand" href="#">Locale</a></h1>
          <div className="input-group w-75 me-3">
            <input type="text" className="form-control" placeholder="What are you looking for?" aria-label="search" aria-describedby="button-addon2" />
            <button className="btn btn-outline-secondary" type="button" id="button-addon2">search</button>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Account
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Login</a></li>
                  <li><a className="dropdown-item" href="#">Logout</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Cart</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
