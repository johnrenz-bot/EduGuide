import "../../index.css";
import { FcGoogle } from "react-icons/fc";
import { useState, useEffect, useRef } from "react";

export default function LandingHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const firstInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const t = setTimeout(() => firstInputRef.current?.focus(), 0);
    return () => clearTimeout(t);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const onDown = (e: MouseEvent) => {
      const target = e.target as Node;
      if (modalRef.current && !modalRef.current.contains(target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onDown);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onDown);
    };
  }, [isOpen]);

  return (
    <header className="w-full h-[10vh] flex items-center border-b px-4">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-3 items-center">
        <div className="flex items-center">
          <p className="text-lg font-semibold">EduGuide</p>
        </div>

        <nav className="flex justify-center">
          <ul className="flex gap-6">
            <li className="hover:underline cursor-pointer">Home</li>
            <li className="hover:underline cursor-pointer">About</li>
            <li className="hover:underline cursor-pointer">Features</li>
          </ul>
        </nav>

        <div className="flex justify-end">
          <button
            onClick={() => setIsOpen(true)}
            className="p-2 px-4 border rounded-xl hover:bg-gray-100 transition"
            aria-haspopup="dialog"
            aria-expanded={isOpen}
          >
            Login
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-label="Login dialog"
            className="relative z-10 w-[min(92%,520px)] max-w-lg bg-white rounded-2xl p-6 shadow-2xl transform transition-all duration-200"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-sm px-2 py-1 rounded hover:bg-gray-100"
              aria-label="Close dialog"
            >
              ✕
            </button>

            <div className="flex flex-col gap-4">
              <div className="text-center">
                <h2 className="text-2xl font-semibold">Welcome back</h2>
                <p className="text-sm text-gray-500">Sign in to continue to EduGuide</p>
              </div>

              <div className="flex flex-col gap-3">
                <label className="text-xs font-medium text-gray-600">Username</label>
                <input
                  ref={firstInputRef}
                  type="text"
                  placeholder="Username or email"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                  aria-label="Username"
                />

                <label className="text-xs font-medium text-gray-600">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                  aria-label="Password"
                />

                <button className="w-full mt-1 py-3 bg-blue-600 text-white rounded-lg font-medium shadow hover:bg-blue-700 transition">
                  Sign in
                </button>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-xs text-gray-400">or</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              <button
                className="w-full flex items-center justify-center gap-3 py-3 border rounded-lg hover:shadow transition"
                aria-label="Sign in with Google"
              >
                <FcGoogle />

                Continue with Google
              </button>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <button className="text-sm text-blue-600 font-medium hover:underline">Create account</button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-gray-600 hover:underline"
                >
                  Continue as guest
                </button>
              </div>

              <div className="text-xs text-gray-400 text-center">
                By continuing you agree to our <span className="text-blue-600">Terms</span> and <span className="text-blue-600">Privacy Policy</span>.
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
