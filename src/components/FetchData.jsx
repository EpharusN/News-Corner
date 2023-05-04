import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FetchData = ({ cat }) => {
  const [Data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        cat
          ? `https://newsapi.org/v2/top-headlines?&category=${cat}&apiKey=9ef88bce29e74a56b0ca5d55be78d17b`
          : "https://newsapi.org/v2/top-headlines?country=us&apiKey=9ef88bce29e74a56b0ca5d55be78d17b"
      );
      const json = await res.json();
      setData(json.articles);
    };
    fetchData();
  }, [cat]);
  return (
    <div className="container my-4">
      <h3>
        <u>TOP HEADLINE</u>
      </h3>
      <div
        className="container d-flex justify-content-center align-items-center flex-column my-3"
        style={{ minweight: "400vh" }}
      >
        {Data
          ? Data.map((items, index) => (
              <div
                className="container my-3"
                key={index}
                style={{ width: "600px" }}
              >
                <h5>{items.title}</h5>
                <img
                  src={items.urlToImage}
                  alt="/"
                  className="img-fluid"
                  style={{
                    width: "auto",
                    height: "300px",
                    objectFit: "cover",
                  }}
                />
                <p>{items.description}</p>
                <Link to={items.url} target="_blank">
                  View More
                </Link>
                <p>{items.author}</p>
              </div>
            ))
          : "LOADING..."}
      </div>
    </div>
  );
};

export default FetchData;
