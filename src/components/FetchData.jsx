import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FetchData = ({ cat }) => {
  const [Data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        cat
          ? `https://newsapi.org/v2/top-headlines?country=us&category=${cat}&apiKey=9ef88bce29e74a56b0ca5d55be78d17b`
          : "https://newsapi.org/v2/top-headlines?country=us&apiKey=9ef88bce29e74a56b0ca5d55be78d17b"
      );
      const json = await res.json();
      setData(json.articles);
    };
    fetchData();
  }, [cat]);
  return (
    <div className="container my-4 ">
      <h3>
        <u style={{ color: "red" }}>TOP HEADLINES</u>
      </h3>
      <div
        className="container d-flex justify-content-center align-items-center flex-column my-3"
        style={{ minweight: "400vh" }}
      >
        {Data
          ? Data.map((items, index) => (
              <div
                className="container my-3 p-3"
                key={index}
                style={{
                  width: "600px",
                  boxShadow: "2px 2px 10px silver",
                  borderRadius: "10px",
                }}
              >
                <h5 className="my-2">{items.title}</h5>
                <div className="d-flex justify-content-center align-items-center ">
                  <img
                    src={items.urlToImage}
                    alt="image not found"
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <p className="my-1">{items.description}</p>
                <Link to={items.url} target="_blank">
                  View More
                </Link>
                <p className="my-1">{items.author}</p>
              </div>
            ))
          : "LOADING..."}
      </div>
    </div>
  );
};

export default FetchData;
