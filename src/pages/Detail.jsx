import React from "react";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const prams = useParams();
  console.log(prams);
  console.log(prams.id + " 완료");
  return (
    <>
      <h1>Detail</h1>
      <Link to="/">홈으로이동</Link>
    </>
  );
};

export default Detail;
