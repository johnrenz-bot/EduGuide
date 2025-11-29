import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  IoPersonOutline,
  IoSettingsOutline,
  IoLogOutOutline
} from "react-icons/io5";

type Guest = {
  role: string;
  username: string;
  isGuest?: boolean;
};

export default function DashboardHeader({ guest }: { guest: Guest | null }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/Login");
  }

  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <Link to="/Dashboard" className="text-lg font-semibold">
          EduGuide
        </Link>

            <div>
            <ul className="flex justify-around">
                <Link to="/Dashboard" className="px-4 py-2 hover:bg-gray-100">Home </Link>
                <Link to="/Dashboard/About" className="px-4 py-2 hover:bg-gray-100">About</Link>
                <Link to="/Dashboard/Services" className="px-4 py-2 hover:bg-gray-100">Services</Link>
                <Link to="/Dashboard/Contact" className="px-4 py-2 hover:bg-gray-100">Contact</Link>
            </ul>
        </div>


        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-3 rounded-full px-3 py-1 hover:bg-gray-100 transition"
          >
            <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
              {guest?.username?.charAt(0).toUpperCase() ?? "G"}
            </div>
            <div className="text-sm text-gray-700">{guest?.username ?? "Guest"}</div>
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-md py-1 z-20">
              <Link
                to="/Profile"
                state={{ user: guest }}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100"
              >
                <IoPersonOutline className="w-5 h-5" /> Profile
              </Link>

              <Link
                to="/Settings"
                state={{ user: guest }}
                onClick={() => setOpen(false)}
                className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100"
              >
                <IoSettingsOutline className="w-5 h-5" /> Settings
              </Link>

              <button
                onClick={handleLogout}
                className="w-full text-left flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100"
              >
                <IoLogOutOutline className="w-5 h-5" /> Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
