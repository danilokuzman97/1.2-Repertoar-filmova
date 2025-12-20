import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Repertoar Filmova</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/movies">Movies</Link> |{" "}
        <Link to="/about/app">About App</Link> |{" "}
        <Link to="/about/author">Author Info</Link>
      </nav>
    </header>
  );
}

export default Header;
