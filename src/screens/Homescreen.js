import React from "react";
import "./Homescreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import Row from "../Row";
import requests from "../requests";

function Homescreen() {
  return (
    <div className="homescreen">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Tranding Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row ttile="Horror Movies" fecthUrl={requests.fetchHorrorMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fecthUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fecthUrl={requests.fetchDocumentaries} />
    </div>
  );
}
export default Homescreen;
