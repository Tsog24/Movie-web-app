import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const imageUrl = (path: string) => {
  return `https://image.tmdb.org/t/p/w300/${path}`;
};
