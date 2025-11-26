import { Link } from "react-router-dom";
import {
  IoCompassOutline,
  IoSchoolOutline,
  IoBriefcaseOutline,
  IoLockClosed
} from "react-icons/io5";

type Feature = {
  title: string;
  label: string;
  icon: React.ReactNode;
  link?: string;
  disabled?: boolean;
};

export default function LandingFeatures() {
  const features: Feature[] = [
    {
      title: "Find Your SHS Strand",
      label: "Strand Finder",
      icon: <IoCompassOutline className="w-12 h-12 drop-shadow-md" />,
      link: "/Strand",
      disabled: false,
    },
    {
      title: "Match Your Perfect College Course",
      label: "Course Matcher",
      icon: <IoSchoolOutline className="w-12 h-12 drop-shadow-md" />,
      link: "/Course",
      disabled: false,
    },
    {
      title: "Explore Job Options & Future Careers",
      label: "Career Paths (Soon)",
      icon: <IoBriefcaseOutline className="w-12 h-12 drop-shadow-md" />,
      disabled: true,
    },
  ];

  return (
    <div className="w-full min-h-screen text-black/80 bg-linear-to-t from-blue-100 to-white/30 flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold chewy-regular mb-14 drop-shadow-lg">
        Explore EduGuide Features
      </h1>

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
                className={`
                  ${baseClasses}
                  bg-black/40 
                  backdrop-blur-md
                  cursor-not-allowed 
                  border border-white/10 
                  shadow-xl 
                  opacity-90
                  text-white
                `}
                aria-disabled="true"
                role="button"
                title="Coming soon"
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

                <div className="text-xl font-bold text-center opacity-90 px-2">
                  {f.title}
                </div>

                <div className="w-full py-3 rounded-xl text-center text-lg font-semibold bg-white/20 text-white border border-white/40">
                  {f.label}
                </div>
              </div>
            );
          }

          return (
            <Link
              to={f.link as string}
              key={i}
              className={`
                ${baseClasses}
                bg-white/10 backdrop-blur-xl 
                border border-white/30 
                rounded-3xl shadow-xl 
                hover:scale-105 hover:shadow-2xl hover:border-white/50
              `}
            >
              <div className="absolute inset-0 rounded-3xl pointer-events-none border border-white/10" />

              <div className="mt-4">{f.icon}</div>

              <div className="text-xl font-bold text-center opacity-90 px-2">
                {f.title}
              </div>

              <div className="w-full py-3 bg-white/20 border border-white/40 rounded-xl text-center text-lg font-semibold transition-all duration-300 hover:bg-white/40 hover:text-gray-900 hover:border-white/70 hover:shadow-lg active:scale-95">
                {f.label}
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
