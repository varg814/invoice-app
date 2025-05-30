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
    <div>
      <h1>Sign up</h1>

      <form
        onSubmit={handleOnSubmit}
        className="w-[400px] mx-auto mt-10 flex flex-col gap-10 border-2 p-2 rounded-lg"
      >
        <input
          type="text"
          className="border-2 border-black w-full"
          placeholder="fullName"
          onChange={(e) => setFullName(e.target.value)}
          value={fullName}
        />
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
        <button>Sign up</button>
        <Link href={"/auth/sign-in"}>already have account? sign in</Link>
      </form>
    </div>
  );
}
