import React from "react";
import { NavBar } from "./NavBar";
import Upcoming from "./Upcoming";
import Popular from "./Popular";
import TopRated from "./TopRated";

export const HomePage = () => {
  return (
    <div className="w-full h-[600px]">
      <NavBar />
      <div>
        <img src="/.vercel.svg" alt="" />
      </div>
      <Upcoming />
      <Popular />
      <TopRated />
    </div>
  );
};
