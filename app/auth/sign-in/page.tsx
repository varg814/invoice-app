"use client";
import { getCookie, setCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import useStore from "@/store/useStore";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getCookie("accessToken");
    if (token) {
      router.push("/");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) return null;

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) return;

    const resp = await fetch("http://localhost:4000/auth/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await resp.json();
    if (resp.status === 200) {
      setCookie("accessToken", data.accessToken, { maxAge: 60 * 60 });
      useStore.getState().setAccessToken(data.accessToken);
      router.push("/");
    }
  };

  return (
    <div>
      <h1>Sign in</h1>

      <form
        onSubmit={handleOnSubmit}
        className="w-[400px] mx-auto mt-10 flex flex-col gap-10 border-2 p-2 rounded-lg"
      >
        <input
          type="text"
          className="border-2 border-black w-full"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          className="border-2 border-black w-full"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button>Sign In</button>
        <Link href={"/auth/sign-up"}>Don&apos;t have an account? Register</Link>
      </form>
    </div>
  );
}
