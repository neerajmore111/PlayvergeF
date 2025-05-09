import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Moment from "moment";
import placeholderMovie from "../../assets/images/movie-thumb/placeholderMovie.jpg";

export default function MovieItem({ item }) {
  const [, setItemMovie] = useState({});

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await axios.get("https://playvergrserver2-1.onrender.com/api/movie/find/" + item._id, {
          headers: {
            Authorization:
              "Bearer " + JSON.parse(localStorage.getItem("user")).token,
          },
        });
        setItemMovie(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovies();
  }, [item]);

  return (
    <>
      <Link
        to={{ pathname: "https://playvergrserver2-1.onrender.com/api/movie-details/" + item.title, movie: item }}
        className="iq-sub-card"
      >
        <div className="media align-items-center">
          {/* Movie thumbnail */}
          <img
            src={item.image || placeholderMovie}
            className="img-fluid mr-3"
            alt="playverge"
            style={{ maxHeight: 50 }}
          />
          <div className="media-body">
            {/* Movie name */}
            <h6 className="mb-0" style={{ color: "red" }}>
              {item.title}
            </h6>
            {/* Created at */}
            <small className="font-size-12">
              {Moment(item.createdAt).format("DD/MM/YYYY, HH:mm")}
            </small>
          </div>
        </div>
      </Link>
    </>
  );
}
