import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function splitIntoXColumns<T>(array: T[], size: number): T[][] {
  try {
    const result: T[][] = [];
    array.forEach((item, index) => {
      const columnIndex = index % size;
      if (!result[columnIndex]) {
        result[columnIndex] = [];
      }
      result[columnIndex].push(item);
    });
    return result;
  } catch (error) {
    console.error(error);
    return [];
  }
}
