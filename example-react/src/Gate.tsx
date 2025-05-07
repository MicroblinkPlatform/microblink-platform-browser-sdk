/**
 * Copyright (c) Microblink. All rights reserved. This code is provided for
 * use as-is and may not be copied, modified, or redistributed.
 */

async function hashStringSHA256(message: string) {
  const msgBuffer = new TextEncoder().encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
  return hashHex;
}

interface GateProps {
  onLogin: () => void;
}

export function Gate({ onLogin }: GateProps) {
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const passwordString = e.currentTarget?.password?.value;
    const hash = await hashStringSHA256(passwordString);
    if (hash === import.meta.env.VITE_PASSWORD_HASH) {
      onLogin();
    } else {
      alert('Invalid password');
    }
  };

  return (
    <form
      className="bg-white w-screen h-screen flex flex-col gap-6 items-center justify-center"
      onSubmit={handleLogin}
    >
      <h1 className="text-4xl font-bold text-center px-5">
        Welcome to the Microblink Platform SDK Web Demo
      </h1>
      <input
        id="password"
        name="password"
        placeholder="Enter password"
        type="password"
        required
        className="w-[300px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
      />
      <button className="w-[100px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
        Enter
      </button>
    </form>
  );
}
