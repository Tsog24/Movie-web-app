import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronRight, ChevronDown } from "lucide-react";
import { Search } from "lucide-react";
import { Moon } from "lucide-react";
import { Badge } from "./ui/badge";
import axios from "axios";
export const NavBar = () => {
  const [data, setData] = useState([]);

  const fetchGenres = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?language=en&api_key=d67d8bebd0f4ff345f6505c99e9d0289"
    );

    setData(response.data.genres);
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  console.log(data, "data");

  return (
    <div className="w-screen h-[59px] flex justify-between items-center p-[80px]">
      <div className="w-[92px] h-[20px] flex justify-center items-center text-indigo-700 ">
        <img src="/Logo.png" alt="" />
      </div>

      <div className="flex items-center gap-3 rounded-[4px]">
        <DropdownMenu>
          <DropdownMenuTrigger className="w-[97px] h-[36px] border rounded-[8px] flex justify-center items-center gap-2">
            <ChevronDown className="w-[16px] h-[16px]" />
            Genre
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" w-[577px]">
            <DropdownMenuLabel>Genres</DropdownMenuLabel>
            <DropdownMenuLabel>See lists of movies by genre</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="flex w-full gap-4 flex-wrap justify-around">
              {data &&
                data?.map((el: { id: number; name: string }) => {
                  return (
                    <Badge
                      className="bg-white text-black border border-solid border-[#E4E4E7]rounded-xl"
                      key={el.id}
                    >
                      {el.name}
                      <ChevronRight />
                    </Badge>
                  );
                })}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className=" flex items-center border rounded-[8px]">
          <Search className="ml-2 w-[16px] h-[17px]" />
          <input className="w-[379px] h-[36px] outline-none" type="text" />
        </div>
      </div>
      <div className="w-[36px] h-[36px] border rounded-[8px] flex items-center justify-center">
        <Moon />
      </div>
    </div>
  );
};
