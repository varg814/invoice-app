"use client";

import { useEffect, useState } from "react";
import useStore from "@/store/useStore";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const accessToken = useStore((state) => state.accessToken);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  return accessToken ? <Navbar /> : null;
}
