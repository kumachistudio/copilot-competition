"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpForm() {
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!data.name || !data.email || !data.password || !data.confirmPassword) {
      setError("Please fill in all fields");
      return;
    }

    if (data.password !== data.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      router.push("/auth/signin");
    } else {
      const result = await response.json();
      setError(result.message || "Signup failed");
    }
  };

  return (
    <>
      <div className="my-6 flex items-center justify-center">
        <span className="block h-px w-full bg-stroke dark:bg-dark-3"></span>
        <div className="block w-full min-w-fit bg-white px-3 text-center font-medium dark:bg-gray-dark">
          Or sign Up
        </div>
        <span className="block h-px w-full bg-stroke dark:bg-dark-3"></span>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          {error && (
            <div className="mb-4 text-red-500">
              {error}
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="name"
              className="mb-2.5 block font-medium text-dark dark:text-white"
            >
              Name
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                value={data.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-2.5 block font-medium text-dark dark:text-white"
            >
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={data.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="mb-2.5 block font-medium text-dark dark:text-white"
            >
              Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={data.password}
                onChange={handleChange}
                autoComplete="password"
                className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="mb-2.5 block font-medium text-dark dark:text-white"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                value={data.confirmPassword}
                onChange={handleChange}
                autoComplete="password"
                className="w-full rounded-lg border border-stroke bg-transparent py-[15px] pl-6 pr-11 font-medium text-dark outline-none focus:border-primary focus-visible:shadow-none dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
              />
            </div>
          </div>

          <div className="mb-4.5">
            <button
              type="submit"
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-primary p-4 font-medium text-white transition hover:bg-opacity-90"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>

      <div className="mt-6 text-center">
        <p>
          Already have an account?{" "}
          <Link href="/auth/signin" className="text-primary">
            Sign In
          </Link>
        </p>
      </div>
    </>
  );
}
