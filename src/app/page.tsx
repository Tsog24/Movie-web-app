"use client";
import { MovieCard } from "@/components/MovieCard";
import Image from "next/image";
import Upcoming from "@/components/Upcoming";
import { NavBar } from "@/components/NavBar";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import { Footer } from "@/components/Footer";
import Popular from "@/components/Popular";
import TopRated from "@/components/TopRated";
import { Carousel } from "@/components/ui/carousel";
import { Carouseld } from "@/components/Carousel";
export default function Home() {
  return (
    <div>
      <NavBar />
      <DropdownMenu />
      <div className="w-full h-[600px]">
        <Carouseld />
      </div>
      <div className="flex flex-col p-20 gap-[52px]">
        <Upcoming />
        <Popular />
        <TopRated />
      </div>
      <Footer />
    </div>
  );
}
