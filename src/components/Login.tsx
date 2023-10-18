"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
function Login() {
  
  return (
    <div className="flex h-screen flex-col items-center justify-center px-4 bg-blue-400">
      <Image
        src="/next.svg"
        alt="logo"
        width={394 / 2}
        height={80 / 2}
        priority={true}
      />
      <button
        onClick={() => signIn()}
        className="animate-pulse text-3xl font-bold text-white"
      >
        sign IN
      </button>
    </div>
  );
}

export default Login;
