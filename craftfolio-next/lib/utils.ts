import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}

export function splitTextIntoChars(text: string): string[] {
  return text.split("");
}

export function splitTextIntoWords(text: string): string[] {
  return text.split(" ");
}

export function splitTextIntoLines(text: string): string[] {
  return text.split("\n");
}

export const easing = {
  outExpo: [0.19, 1, 0.22, 1] as const,
  inOutExpo: [0.87, 0, 0.13, 1] as const,
  elastic: [0.34, 1.56, 0.64, 1] as const,
  smooth: [0.4, 0, 0.2, 1] as const,
};
