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
    <div className="flex flex-col  gap-[15px] items-center justify-center h-screen w-full bg-gradient-to-br from-blue-500 to-purple-500 ">
      <h1 className="text-4xl text-white">Sign in</h1>

      <form
        onSubmit={handleOnSubmit}
        className="w-full max-w-[375px] mx-auto mt-10 flex flex-col gap-10 border-2 p-2 rounded-lg space-y-4 items-center"
      >
        <input
          type="text"
          className="w-full p-3 rounded-md bg-white bg-opacity-20 text-black placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          type="password"
          className="w-full p-3 rounded-md bg-white bg-opacity-20 text-black placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button className="w-full max-w-[150px] py-3 bg-purple-600 text-white font-bold rounded-md hover:bg-purple-700 focus:ring-2 focus:ring-purple-300 cursor-pointer">
          Sign In
        </button>
        <Link className="text-white" href={"/auth/sign-up"}>
          Don&apos;t have an account? Register
        </Link>
      </form>
    </div>
  );
}
