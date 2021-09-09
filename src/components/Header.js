import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-light bg-info d-flex justify-content-center">
      <span className="navbar-brand mb-0 h1">
        <Link to="/">
          <i className="fas fa-home fa-2x text-light"></i>
        </Link>
      </span>
    </nav>
  );
}

export default Header;
