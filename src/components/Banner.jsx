import React, { useState } from "react";
import "./Banner.css";
import banner from "../assets/banner1.jpg";
import { useEffect } from "react";
import axios from "../axios";
import requests from "../Request";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTopRated);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  console.log(movie);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "...." : string;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
      }}
    >
      <div className="bannerContent">
        <h1 className="bannerTitle">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>

        <div className="bannerBtns">
          <button className="bannerBtn">Play</button>
          <button className="bannerBtn">My List</button>
        </div>

        <div className="bannerDescription">
          {truncate(movie?.overview, 250)}
        </div>
      </div>

      <div className="bannerFadeBtottom" />
    </header>
  );
};

export default Banner;
