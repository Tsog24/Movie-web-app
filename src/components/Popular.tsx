"use client";

import React, { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import axios from "axios";
import { imageUrl } from "@/lib/utils";

type MovieDataTypes = {
  title: string;
  vote_average: number;
  poster_path: string;
};

export const Popular = () => {
  const [data, setData] = useState<MovieDataTypes[]>([]);
  const movies = data.slice(0, 10);
  const fetchGenres = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
    );

    setData(response.data.results);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  console.log(data, "data");

  return (
    <div className="flex flex-col">
      <p className="text-[30px] pb-8">Popular</p>
      <div className="flex flex-wrap gap-25">
        {movies.map((data, index) => {
          return (
            <MovieCard
              key={index}
              rating={data.vote_average}
              imageUrl={imageUrl(data.poster_path)}
              title={data.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
