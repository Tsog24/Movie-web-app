import * as React from "react";
import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";

export const MovieCard = ({
  imageUrl,
  title,
  rating,
}: {
  imageUrl: string;
  title: string;
  rating: number;
}) => {
  return (
    <Card className="w-[230px] h-[439px] p-0">
      <CardContent className="p-0">
        <Image width={230} height={340} alt="poster-image" src={imageUrl} />
      </CardContent>
      <CardFooter className="items-start flex flex-col">
        <div className="flex items-start">
          <Star className="text-[#FDE047]" fill="#FDE047" />
          <p>{rating}</p>
        </div>

        <p>{title}</p>
      </CardFooter>
    </Card>
  );
};
