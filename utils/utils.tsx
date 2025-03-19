import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function to merge class names dynamically with Tailwind conflict resolution.
 * This version is backward-compatible and can be extended without breaking existing usage.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}