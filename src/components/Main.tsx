import { useState, useEffect } from "react";
import requests from "../Requests";
import axios from "axios";
import { movieType } from "../types";

const Main = () => {
  const [movies, setMovies] = useState<movieType[]>([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);
  console.log(movies);

  return <div>Main</div>;
};

export default Main;
