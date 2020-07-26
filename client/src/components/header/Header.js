import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4 text-center">Google Books Search</h1>
        <p className="lead text-center">
          Search for and Save Books of Interest
        </p>
      </div>
    </div>
  );
};

export default Header;
