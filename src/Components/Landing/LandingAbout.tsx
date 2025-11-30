import "../../index.css";

export default function LandingAbout() {
  const quotes = [
    "About EduGuide",
    "EduGuide is a student-focused web application designed to help learners choose the best Senior High School strand, college course, and school for their future.",
    "It provides intelligent recommendations based on a student’s interests, strengths, and long-term goals, helping them explore their ideal academic path.",
    "Students can search, compare, and bookmark schools, universities, strands, and courses — all in one place for maximum convenience.",
    "EduGuide empowers every learner with clarity, confidence, and futuristic tools for smarter decision-making."
  ];

  return (
    <section className="relative w-full h-full bg-[#0e0e0e] py-28 flex justify-center overflow-hidden">

      {[...Array(12)].map((_, i) => (
        <span
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            background: `rgba(${120 + Math.random()*80}, 100, 255, 0.4)`
          }}
        />
      ))}

      <div className="absolute inset-0 bg-linear-to-br from-blue-700/20 via-purple-600/10 to-cyan-500/20 blur-3xl" />

      <div className="relative w-[90%] max-w-6xl flex flex-col md:flex-row gap-16 items-center z-10">

        <div className="relative group w-full md:w-1/2 h-80 md:h-[85vh] rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-xl">
          <div className="absolute inset-0 bg-linear-to-br from-blue-500/40 to-purple-500/40 opacity-40 group-hover:opacity-60 transition-all duration-500 blur-2xl" />
          <img
            src="./Image/Landing/check.png"
            alt="EduGuide Illustration"
            className="relative w-full h-full object-cover rounded-3xl transition-all duration-700 group-hover:scale-110 group-hover:saturate-150"
          />
          <div className="absolute inset-0 border border-white/20 rounded-3xl pointer-events-none" />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-5 px-2">

          {quotes.map((quote, index) => (
            <p
              key={index}
              className={
                index === 0
                  ? "text-5xl md:text-6xl font-black text-white drop-shadow-xl leading-tight tracking-tight animate-fadeIn"
                  : "text-gray-300 text-lg md:text-xl leading-relaxed opacity-90 animate-fadeIn"
              }
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {quote}
            </p>
          ))}

          <button className="mt-6 px-6 py-3 w-fit bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-lg backdrop-blur-xl shadow-lg hover:shadow-blue-500/40 hover:scale-[1.03] transition-all duration-300">
            Explore EduGuide →
          </button>
        </div>

      </div>
    </section>
  );
}
