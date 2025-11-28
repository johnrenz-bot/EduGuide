import "../index.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!username || !password) {
      setMessage("Please enter both username and password.");
      return;
    }
    setMessage(`Logging in as ${username}...`);
  }

  function handleGoogleSignIn() {
    setMessage("Redirecting to Google sign-in...");
  }



  return (
    <>
      <header className="w-full border-b py-3">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg font-semibold">EduGuide</p>
          <Link to="/EduGuide" className="text-sm text-blue-600 hover:underline">
            Landing
          </Link>
        </div>
      </header>

      <main className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white border rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-4">Welcome back</h2>
          <p className="text-sm text-center text-gray-600 mb-6">
            Sign in to your account or continue with one of the options below.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <label className="block">
              <span className="text-sm font-medium">Username</span>
              <input
                value={username}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setUsername(e.target.value)
                }
                type="text"
                placeholder="Enter username"
                className="mt-1 block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                autoComplete="username"
              />
            </label>

            <label className="block">
              <span className="text-sm font-medium">Password</span>
              <input
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                type="password"
                placeholder="Enter password"
                className="mt-1 block w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                autoComplete="current-password"
              />
            </label>

            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
            >
              Login
            </button>
          </form>

          {message && (
            <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
          )}

          <div className="mt-6 flex flex-col items-center gap-2 justify-center">
            <button
              onClick={handleGoogleSignIn}
              className="flex items-center w-full gap-2 py-2 justify-center border rounded-xl hover:bg-gray-100 transition"
            >
              <FcGoogle className="text-xl" />
              <span>Google</span>
            </button>

            <Link
              to="/CreateAccount"
              className="w-full p-2 border justify-center flex items-center rounded-xl hover:bg-gray-100 transition"
            >
              Create Account
            </Link>

            <Link
              to="/Dashboard"
              className="w-full p-2 border rounded-xl flex justify-center items-center hover:bg-gray-100 transition"
            >
              Guest
            </Link>
          </div>

          <div className="mt-6 text-center">
            <Link to="/Login" className="text-sm text-gray-600 hover:underline">
              Forgot password?
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
