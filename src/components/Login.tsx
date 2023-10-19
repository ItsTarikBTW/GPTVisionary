"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Logo from "./logo";
function Login() {
  
  return (
    <div className="flex h-screen flex-col items-center justify-center px-4 bg-[#202123]">
      <Logo  />
      <p>
        you need to sign in to use the app
      </p>
      <button
        onClick={() => signIn("google")}
        className="animate-pulse text-2xl font-bold text-white my-2"
      >
        sign IN
      </button>
    </div>
  );
}

export default Login;
