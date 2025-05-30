"use client";

import { useEffect } from "react";
import { getCookie } from "cookies-next";
import useStore from "@/store/useStore";

export default function AuthSync() {
  const setAccessToken = useStore((state) => state.setAccessToken);

  useEffect(() => {
    const token = getCookie("accessToken") as string | undefined;
    if (token) {
      setAccessToken(token);
    }
  }, [setAccessToken]);

  return null;
}
