import React from "react";
import BannerComponent from "../../Components/banner/Banner";
import Header from "../../Components/Header.tsx/Header";
import MoviesList from "../../Components/movieList/MoviesList";

const Home = () => {
  return (
    <>
      <Header />
      <BannerComponent />
      <MoviesList />
    </>
  );
};

export default Home;
