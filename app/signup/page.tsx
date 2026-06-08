"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase/client";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  async function handleSignup(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    setMessage("Creating account...");

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage(
      "Account created! Check your email for verification."
    );

    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <main className="min-h-screen flex items-center justify-center px-6">

      <div
        className="
        w-full
        max-w-md
        bg-[#161616]
        border
        border-zinc-800
        rounded-3xl
        p-10
        "
      >
        <p className="text-pink-500 uppercase tracking-[0.3em]">
          Authentication
        </p>

        <h1 className="text-4xl font-bold mt-4">
          Create Account
        </h1>

        <p className="text-zinc-400 mt-4">
          Join the ByteFuture community.
        </p>

        <form
          onSubmit={handleSignup}
          className="space-y-5 mt-10"
        >
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
            className="
            w-full
            p-4
            rounded-xl
            bg-zinc-900
            border
            border-zinc-800
            "
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="
            w-full
            p-4
            rounded-xl
            bg-zinc-900
            border
            border-zinc-800
            "
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="
            w-full
            p-4
            rounded-xl
            bg-zinc-900
            border
            border-zinc-800
            "
          />

          <button
            type="submit"
            className="
            w-full
            py-4
            rounded-xl
            bg-pink-500
            hover:scale-[1.02]
            transition
            "
          >
            Create Account
          </button>
        </form>

        {message && (
          <p className="mt-6 text-center text-zinc-300">
            {message}
          </p>
        )}
      </div>

    </main>
  );
}