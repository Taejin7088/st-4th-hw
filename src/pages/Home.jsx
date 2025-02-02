import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to="/detail/ID전달">디테일로이동</Link>
    </>
  );
};

export default Home;
