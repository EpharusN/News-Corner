import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ handleSearch }) => {
  const [query, setQuery] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      query
        ? `https://newsapi.org/v2/everything?q=${query}&apiKey=9ef88bce29e74a56b0ca5d55be78d17b`
        : `https://newsapi.org/v2/top-headlines?country=${country}s&apiKey=9ef88bce29e74a56b0ca5d55be78d17b`
    );
    const json = await res.json();
    handleSearch(json.articles);
    setQuery("");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand text-white" to="/">
            <h4>News Corner</h4>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="general"
                >
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  class="nav-link active text-white"
                  aria-current="page"
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link active text-white"
                  aria-current="page"
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/health"
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/sports"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active text-white"
                  aria-current="page"
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
              <li className="nav-item">
                <form className="d-flex" onSubmit={handleSubmit}>
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                  <button className="btn btn-outline-success" type="submit">
                    Search
                  </button>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
