import React from "react";
import Rows from "../components/Rows";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import requests from "../Request";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Nav />
      <Banner />

      <Rows
        title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOrignials}/>
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Rows title="Science Fiction Movies" fetchUrl={requests.fetchScienceFictionMovies} />
      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Rows title="Drama Movies" fetchUrl={requests.fetchDramaMovies} />
      {/* <Rows title="Kids Movies" fetchUrl={requests.fetchKidseMovies} /> */}
      {/* <Rows title="Honor Movies" fetchUrl={requests.fetchHonorMovies} /> */}
    </div>
  );
};

export default HomePage;
