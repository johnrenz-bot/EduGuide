import { Link } from "react-router-dom";
import { IoLockClosed } from "react-icons/io5";
import {
  IoCompassOutline,
  IoSchoolOutline,
  IoBriefcaseOutline
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
  link?: string;
};

export default function DashboardMain({ guest }: { guest: Guest | null }) {
  const features: Feature[] = [
    {
      title: "Find Your SHS Strand",
      label: "Strand Finder",
      icon: <IoCompassOutline className="w-12 h-12 drop-shadow-md" />,
      link: "/Strand"
    },
    {
      title: "Match Your Perfect College Course",
      label: "Course Matcher",
      icon: <IoSchoolOutline className="w-12 h-12 drop-shadow-md" />,
      link: "/Course"
    },
    {
      title: "Explore Job Options & Future Careers",
      label: "Career Paths (Soon)",
      icon: <IoBriefcaseOutline className="w-12 h-12 drop-shadow-md" />,
      disabled: true
    }
  ];

  return (
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
            const cardClasses = `
              w-72 h-80 rounded-3xl shadow-xl relative overflow-hidden
              p-6 flex flex-col items-center justify-between
              transition-all duration-300
            `;

            if (f.disabled) {
              return (
                <div
                  key={i}
                  className={`${cardClasses} bg-black/40 backdrop-blur-md cursor-not-allowed border border-black opacity-90 text-black`}
                >
                  <div className="absolute inset-0 bg-black/40 rounded-3xl" />

                  <div className="absolute top-3 right-3 bg-white/90 rounded-full p-2 shadow-sm">
                    <IoLockClosed className="w-4 h-4 text-gray-800" />
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="rounded-full bg-white/20 backdrop-blur-xl p-5 border border-white/10">
                      <IoLockClosed className="w-10 h-10 text-white opacity-90" />
                    </div>
                  </div>

                  <div className="mt-4 opacity-90">{f.icon}</div>
                  <div className="text-xl font-bold text-center">{f.title}</div>
                  <div className="w-full py-3 rounded-xl text-center bg-white/20 border border-white/40">
                    {f.label}
                  </div>
                </div>
              );
            }

            return (
              <Link
                to={f.link!}
                key={i}
                className={`${cardClasses} bg-white/10 backdrop-blur-xl border border-white/30 hover:scale-105 hover:border-black`}
              >
                <div className="mt-4">{f.icon}</div>
                <div className="text-xl font-bold text-center">{f.title}</div>
                <div className="w-full py-3 bg-white/20 border border-black rounded-xl text-center text-lg font-semibold hover:bg-gray-500 hover:border-2 hover:scale-105 hover:text-white active:scale-95">
                  {f.label}
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}
