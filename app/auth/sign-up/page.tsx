"use client";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
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
    if (!email || !password || !fullName) return;

    const resp = await fetch("http://localhost:4000/auth/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        fullName,
      }),
    });
    if (resp.status === 201) {
      router.push("/auth/sign-in");
    }
  };

  return (
    <div className="flex flex-col  gap-[15px] items-center justify-center h-screen w-full bg-gradient-to-br from-blue-500 to-purple-500 ">
      <h1 className="text-4xl text-white">Sign up</h1>

      <form
        onSubmit={handleOnSubmit}
        className="w-full max-w-[375px] mx-auto mt-10 flex flex-col gap-10 border-2 p-2 rounded-lg space-y-4 items-center"
      >
        <input
          type="text"
          className="w-full p-3 rounded-md bg-white bg-opacity-20 text-black placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-300"
          placeholder="fullName"
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
        />
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
          Sign up
        </button>
        <Link className="text-white" href={"/auth/sign-in"}>
          already have account? sign in
        </Link>
      </form>
    </div>
  );
}
