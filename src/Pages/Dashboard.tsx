import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { IoPersonOutline, IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import {
  IoCompassOutline,
  IoSchoolOutline,
  IoBriefcaseOutline,
  IoLockClosed
} from "react-icons/io5";

type Guest = {
  role: string;
  username: string;
  isGuest?: boolean;
};

type Feature = {
  title: string;
  label: string;
  icon: React.ReactNode;
  disabled?: boolean;
};

export default function Dashboard() {
  const location = useLocation();
  const guest = (location.state as { user?: Guest } | undefined)?.user ?? null;
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  function handleLogout() {
    navigate("/Login");
  }

  const features: Feature[] = [
    {
      title: "Find Your SHS Strand",
      label: "Strand Finder",
      icon: <IoCompassOutline className="w-12 h-12 drop-shadow-md" />
    },
    {
      title: "Match Your Perfect College Course",
      label: "Course Matcher",
      icon: <IoSchoolOutline className="w-12 h-12 drop-shadow-md" />
    },
    {
      title: "Explore Job Options & Future Careers",
      label: "Career Paths (Soon)",
      icon: <IoBriefcaseOutline className="w-12 h-12 drop-shadow-md" />,
      disabled: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="w-full bg-white border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <div>
            <Link to="/EduGuide" className="text-lg font-semibold">
              EduGuide
            </Link>
          </div>

          <div className="relative">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-expanded={open}
              className="flex items-center gap-3 rounded-full px-3 py-1 hover:bg-gray-100 transition"
            >
              <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
                {guest?.username?.charAt(0).toUpperCase() ?? "U"}
              </div>
              <div className="text-sm text-gray-700">{guest?.username ?? "User"}</div>
            </button>

            {open && (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-44 bg-white border rounded-lg shadow-md py-1 z-20"
              >
                <Link
                  to="/Profile"
                  state={{ user: guest }}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100"
                >
                  <IoPersonOutline className="w-5 h-5" />
                  Profile
                </Link>

                <Link
                  to="/Settings"
                  state={{ user: guest }}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100"
                >
                  <IoSettingsOutline className="w-5 h-5" />
                  Settings
                </Link>

                <button
                  onClick={handleLogout}
                  className="w-full text-left flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100"
                >
                  <IoLogOutOutline className="w-5 h-5" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        <div className="bg-white border rounded-lg p-6 shadow-sm mb-8">
          {guest ? (
            <p className="text-gray-700">
              Welcome, <span className="font-semibold">{guest.username}</span> — you are signed in as a{" "}
              <span className="font-medium">{guest.role}</span>.
            </p>
          ) : (
            <p className="text-gray-600">No user data received.</p>
          )}
        </div>

        <section className="w-full min-h-screen text-black/80 flex flex-col items-center py-6">
          <h2 className="text-3xl font-bold mb-8">Explore EduGuide Features</h2>

          <div className="w-full flex justify-center gap-10 px-6 flex-wrap">
            {features.map((f, i) => {
              const baseClasses = `
                w-72 h-80
                rounded-3xl shadow-xl relative overflow-hidden
                p-6 flex flex-col items-center justify-between
                transition-all duration-300
              `;

              if (f.disabled) {
                return (
                  <div
                    key={i}
                    className={`${baseClasses} bg-black/40 backdrop-blur-md cursor-not-allowed border border-white/10 opacity-90 text-white`}
                  >
                    <div className="absolute inset-0 bg-black/40 rounded-3xl pointer-events-none" />

                    <div className="absolute top-3 right-3 bg-white/90 rounded-full p-2 shadow-sm">
                      <IoLockClosed className="w-4 h-4 text-gray-800" />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="rounded-full bg-white/20 backdrop-blur-xl p-5 shadow-md border border-white/10">
                        <IoLockClosed className="w-10 h-10 text-white opacity-90" />
                      </div>
                    </div>

                    <div className="mt-4 opacity-90">{f.icon}</div>

                    <div className="text-xl font-bold text-center opacity-90 px-2">{f.title}</div>

                    <div className="w-full py-3 rounded-xl text-center text-lg font-semibold bg-white/20 text-white border border-white/40">
                      {f.label}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  to="/Strand"
                  key={i}
                  className={`${baseClasses} bg-white/10 backdrop-blur-xl border border-white/30 rounded-3xl shadow-xl hover:scale-105 hover:shadow-2xl hover:border-white/50`}
                >
                  <div className="absolute inset-0 rounded-3xl pointer-events-none border border-white/10" />
                  <div className="mt-4">{f.icon}</div>
                  <div className="text-xl font-bold text-center opacity-90 px-2">{f.title}</div>
                  <div className="w-full py-3 bg-white/20 border border-white/40 rounded-xl text-center text-lg font-semibold transition-all duration-300 hover:bg-white/40 hover:text-gray-900 hover:border-white/70 hover:shadow-lg active:scale-95">
                    {f.label}
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
