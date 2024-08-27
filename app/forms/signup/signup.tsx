"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { LoginSchema, LoginType } from "../schema/Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

const Login = () => {
  const { register, handleSubmit, formState } = useForm<LoginType>({
    resolver: zodResolver(LoginSchema),
  });
  const [isLoading, setIsLoading] = useState(false);
  const { errors } = formState;
  const onSubmit = () => {
    console.log("login");
  };

  return (
    <div className="flex bg-white w-full h-screen relative">
      <Image
        src="/images/logo.png"
        alt=""
        width={1000}
        height={1000}
        className="absolute top-5 left-5 w-28 h-10"
      />
      <Link href="" className="absolute right-4 top-2 text-white">
        Sign up
      </Link>
      <div className="flex w-1/2 items-center p-20">
        <Image
          src="/images/loginimage.png"
          alt=""
          width={1000}
          height={1000}
          className="w-1/2 h-full transform scale-x-[-1]"
        />
        <div className="flex flex-wrap">
          <p className="flex w-full text-txtdark font-extrabold text-6xl">
            Welcome Back
          </p>
        </div>
      </div>
      <div className="flex w-1/2 bg-myblue items-center justify-center px-28 py-20">
        <div className="flex flex-col bg-white rounded-xl h-full w-full p-10 space-y-16">
          <div className="space-y-2">
            <p className="text-txtdark text-3xl font-bold">Login</p>
            <p className="text-txtdark text-lg">
              Hey Enter your details to sign in to you account
            </p>
          </div>
          <form className="space-y-2" onClick={handleSubmit(onSubmit)}>
            <input
              className="w-full border h-12 rounded-xl pl-5 outline-none"
              type="text"
              placeholder="Email address"
              {...register("email")}
            />
            <p className="text-red-500 text-sm ml-4">
              {errors.email?.message as string}
            </p>
            <input
              className="w-full border h-12 rounded-xl pl-5 outline-none"
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <p className="text-red-500 text-sm ml-4">
              {errors.password?.message as string}
            </p>
            <button
              type="submit"
              className="mt-10 bg-myblue text-white w-full h-12 rounded-xl"
            >
              {isLoading ? (
                <div className="flex flex-row gap-2 items-center">
                  Loading
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-bounce"></div>
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-bounce [animation-delay:-.3s]"></div>
                  <div className="w-3 h-3 rounded-full bg-red-500 animate-bounce [animation-delay:-.5s]"></div>
                </div>
              ) : (
                "Sign in"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
