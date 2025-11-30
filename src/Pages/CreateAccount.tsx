import "../index.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function CreateAccount() {
  const [fullName, setFullName] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!fullName || !username || !email || !password || !confirmPassword) {
      setMessage("Please fill out all fields.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      setMessage("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setMessage(`Creating account for ${username}...`);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
      <div
  className="hidden md:flex items-end justify-start p-12 bg-cover bg-center bg-no-repeat relative text-white"
  style={{ backgroundImage: "url('../Image/Landing/poster.png')" }}
>
  <div className="absolute inset-0 bg-linear-to-t from-black/70"></div>

  <div className="relative max-w-md flex flex-col items-start space-y-4">
    <div className="w-16 h-1 bg-indigo-500 rounded-full mb-2"></div>
    <h3 className="text-4xl md:text-5xl font-extrabold leading-tight">
      Join EduGuide Today
    </h3>
    <p className="text-base md:text-lg opacity-95">
      Create your account to explore courses, track your progress, and achieve your academic goals.
    </p>
    <p className="text-sm md:text-base opacity-80">
      Step into a smarter way to plan your future with EduGuide.
    </p>
  </div>
</div>

        <div className="p-6 md:p-10">
          <header className="flex items-center justify-between mb-6">
            <div>
              <p className="text-lg font-semibold">EduGuide</p>
            </div>
                            <Link to="/Login" className="text-sm text-gray-500 hover:underline">Back to Login</Link>

          </header>

          <h2 className="text-2xl font-bold mb-2">Create an account</h2>
          <p className="text-sm text-gray-500 mb-6">Register to get started with EduGuide. Keep it short—we'll walk you through the rest later.</p>

          <form onSubmit={handleRegister} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium mb-1">Full name</label>
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                type="text"
                placeholder="full name"
                className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                autoComplete="name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Username</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="username"
                className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                autoComplete="username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="...@example.com"
                className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                autoComplete="email"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="password"
                className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                autoComplete="new-password"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Confirm password</label>
              <input
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                placeholder="Repeat password"
                className="w-full rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
                autoComplete="new-password"
              />
            </div>

            <div className="sm:col-span-2 flex flex-col gap-3 mt-2">
              <button
                type="submit"
                className="w-full py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
              >
                Create account
              </button>

              {message && (
                <p className="text-center text-sm text-gray-700">{message}</p>
              )}

              <div className="flex items-center justify-center gap-2">
                <Link to="/Login" className="text-sm text-gray-600 hover:underline">Already have an account? Login</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
