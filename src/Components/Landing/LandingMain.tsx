import "../../index.css";
import { IoBulbOutline, IoSchoolOutline, IoRocketOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function LandingMain() {
    const quote = [
        "Welcome to EduGuide! 🎓",
        "Your smart companion in choosing the right SHS strand, college course, and university.",
        "Discover your interests, explore schools, and find the best path for your future — all in one place.",
        "Your future begins here. Start your journey with EduGuide today!",
    ];

    const icons = [
        <IoBulbOutline className="w-12 h-12" />,
        <IoSchoolOutline className="w-12 h-12" />,
        <IoRocketOutline className="w-12 h-12" />,
    ];

    return (
        <div className="h-screen w-full relative overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center transform-gpu will-change-transform"
                style={{ backgroundImage: "url('/Image/Landing/poster.png')", filter: "saturate(1.08)" }}
                aria-hidden="true"
            />
            <div className="absolute inset-0 pointer-events-none bg-linear-to-b from-black/20 via-white/10 to-black/30" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col items-center gap-10">
                    <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold chewy-regular leading-tight text-gray-900 drop-shadow-[0_12px_18px_rgba(0,0,0,0.35)]">
                        <span className="inline-block px-4 py-2 rounded-lg backdrop-blur-md"> {quote[0]} </span>
                    </h1>

                    <p className="max-w-3xl text-center text-base md:text-lg text-gray-800/90">
                        {quote[1]} <span className="hidden md:inline"> {quote[2]}</span>
                    </p>

                    <div className="flex gap-4 items-center">
                        <Link to="/Login" className="px-6 py-3 rounded-2xl bg-linear-to-r from-blue-600 to-teal-400 text-white font-semibold shadow-lg transform-gpu hover:-translate-y-1 transition">
                            Get Started
                        </Link>
                        <a href="#about" className="px-6 py-3 rounded-2xl bg-white/30 backdrop-blur-sm border border-white/40 text-gray-900 font-medium hover:scale-105 transition">
                            Learn More
                        </a>
                    </div>
                </div>

                <div className="mt-14">
                    <div className="mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
                        <div className="relative group">
                            <div className="absolute -inset-0.5 rounded-xl bg-linear-to-r from-purple-500/30 via-pink-300/20 to-yellow-300/20 opacity-80 blur-xl group-hover:opacity-100 transition" />
                            <div className="relative rounded-xl backdrop-blur-md bg-white/20 border border-black/25 shadow-xl p-8 h-full flex flex-col justify-center items-center gap-4 transform transition hover:-translate-y-3">
                                <div className="p-3 rounded-full bg-white/70 shadow-sm">
                                    <div className="text-2xl text-gray-900 hover:text-yellow-500">{icons[0]}</div>
                                </div>
                                <p className="text-center text-sm md:text-base text-gray-900/95">{quote[1]}</p>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-0.5 rounded-xl bg-linear-to-r from-cyan-300/30 via-sky-200/20 to-emerald-200/20 opacity-80 blur-xl group-hover:opacity-100 transition" />
                            <div className="relative rounded-xl backdrop-blur-md bg-white/18 border border-black/25 shadow-xl p-8 h-full flex flex-col justify-center items-center gap-4 transform transition hover:-translate-y-3">
                                <div className="p-3 rounded-full bg-white/70 shadow-sm">
                                    <div className="text-2xl text-gray-900  hover:text-green-500">{icons[1]}</div>
                                </div>
                                <p className="text-center text-sm md:text-base text-gray-900/95">{quote[2]}</p>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-0.5 rounded-xl bg-linear-to-r from-orange-300/30 via-rose-200/20 to-amber-200/20 opacity-80 blur-xl group-hover:opacity-100 transition" />
                            <div className="relative rounded-xl backdrop-blur-md bg-white/18 border border-black/25 shadow-xl p-8 h-full flex flex-col justify-center items-center gap-4 transform transition hover:-translate-y-3">
                                <div className="p-3 rounded-full bg-white/70 shadow-sm">
                                    <div className="text-2xl text-gray-900  hover:text-sky-500">{icons[2]}</div>
                                </div>
                                <p className="text-center text-sm md:text-base text-gray-900/95">{quote[3]}</p>
                            </div>
                        </div>
                    </div>
                </div>

           
            </div>

            <style>{`
        .chewy-regular { font-family: 'Chewy', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }
        @media (min-width: 1024px) {
          .min-h-screen { min-height: 88vh; }
        }
        body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
      `}</style>
        </div>
    );
}
