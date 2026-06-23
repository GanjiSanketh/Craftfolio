"use client";
import { useEffect } from "react";
import { useLenis } from "@/hooks/useLenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useLenis();

  return <>{children}</>;
}
