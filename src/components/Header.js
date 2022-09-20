import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          <img
            className="header-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/100px-IMDB_Logo_2016.svg.png"
          />
        </Link>
        <Link to="/movies/popular" style={{textDecoaration: "none"}}><span>Popular</span></Link>
        <Link to="/movies/top_rated" style={{textDecoaration: "none"}}><span>Top Rated</span></Link>
        <Link to="/movies/upcoming" style={{textDecoaration: "none"}}><span>Upcoming</span></Link>
      </div>
    </div>
  );
};

export default Header;
