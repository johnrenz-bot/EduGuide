import "../../index.css";
import { Link } from "react-router-dom";

export default function LandingHeader() {
  return (
    <header className="w-full h-[10vh] flex items-center px-4">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-3 items-center">
        <div className="flex items-center">
          <p className="text-lg font-semibold">EduGuide</p>
        </div>

        <nav className="flex justify-center">
          <ul className="flex gap-6">
            <li>
              <a href="#home" className="hover:underline cursor-pointer">
                Home
              </a>
            </li>
             <li>
              <a href="#univ" className="hover:underline cursor-pointer">
                Univ
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline cursor-pointer">
                About
              </a>
            </li>
            <li>
              <a href="#features" className="hover:underline cursor-pointer">
                Features
              </a>
            </li>
          </ul>
        </nav>

        <div className="flex justify-end">
          <Link
            to="/Login"
            className="p-2 px-4 border rounded-xl hover:bg-gray-100 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
