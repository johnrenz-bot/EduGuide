import "../index.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

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
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">

     <div
  className="hidden md:flex items-end justify-start p-12 text-white bg-cover bg-center bg-no-repeat relative"
  style={{ backgroundImage: "url('../Image/Landing/poster.png')" }}
>
  <div className="absolute inset-0 bg-black/30"></div>
  <div className="absolute inset-0 bg-linear-to-t from-black/60"></div>

  <div className="relative max-w-lg flex flex-col space-y-4 mb-10">
    <h3 className="text-4xl font-extrabold leading-tight">
      Welcome back to EduGuide
    </h3>

    <p className="text-base opacity-95">
      Your learning journey continues here. Access your saved choices, explore new courses,
      and unlock the academic path built for you.
    </p>

    <p className="text-sm opacity-80">
      Stay informed. Stay prepared. Your future starts with the right guidance.
    </p>
  </div>
</div>


        <div className="p-8 md:p-12">
          <header className="flex items-center justify-between mb-6">
            <p className="text-lg font-semibold">EduGuide</p>
            <Link to="/EduGuide" className="text-sm text-blue-600 hover:underline">Landing Page</Link>
          </header>

          <h2 className="text-2xl font-bold text-center md:text-left mb-2">Welcome back</h2>
          <p className="text-sm text-gray-600 text-center md:text-left mb-6">
            Sign in to your account or continue with one of the options below.
          </p>

          <form onSubmit={handleLogin} className="space-y-4 max-w-md mx-auto md:mx-0">
            <label className="block">
              <span className="text-sm font-medium">Username</span>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
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
                onChange={(e) => setPassword(e.target.value)}
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

          <div className="mt-6 flex flex-col items-center gap-3 max-w-md mx-auto md:mx-0">
            <Link
              to="/CreateAccount"
              className="w-full p-2 border justify-center flex items-center rounded-xl hover:bg-gray-100 transition"
            >
              Create Account
            </Link>

            <button
              onClick={handleGoogleSignIn}
              disabled
              className="flex items-center w-full gap-2 py-2 justify-center border rounded-xl bg-gray-100 text-gray-400 cursor-not-allowed opacity-60"
            >
              Google • Coming Soon
            </button>

            <Link
              to="/Dashboard"
              className="w-full p-2 border rounded-xl flex justify-center items-center hover:bg-gray-100 transition"
            >
              Continue as Guest
            </Link>
          </div>

          <div className="mt-6 text-center">
            <Link to="/Login" className="text-sm text-gray-600 hover:underline">
              Forgot password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
