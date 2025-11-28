import { IoIosArrowBack } from "react-icons/io";
import { IoLockClosed } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Strand() {
  const AcademicStrands: string[] = ["STEM", "ABM", "GAS"];
  const OtherStrands: string[] = [
    "ICT",
    "Home Economics",
    "Agri-Fishery Arts",
    "Arts & Design",
    "Sports",
  ];

  const AcademicStrandsImage: string[] = [
    "/Image/Strands/AcademicStrands/stem.jpg",
    "/Image/Strands/AcademicStrands/abm.jpg",
    "/Image/Strands/AcademicStrands/gas.jpg",
  ];

  const OtherStrandsImage: string[] = [
    "/Image/Strands/OtherStrands/ict.jpg",
    "/Image/Strands/OtherStrands/home-economics.jpg",
    "/Image/Strands/OtherStrands/agri-fishery.jpg",
    "/Image/Strands/OtherStrands/arts-design.jpg",
    "/Image/Strands/OtherStrands/sports.jpg",
  ];

  const [open, setOpen] = useState<number | null>(null);

  const items = [
    {
      q: "What is the difference between Academic and Technical-Vocational strands?",
      a: "Academic strands prepare students for college, while Technical-Vocational strands equip students with practical skills for employment or entrepreneurship.",
    },
    {
      q: "Can I switch strands in SHS?",
      a: "Switching strands is allowed at the start of the school year, depending on school policies and available slots.",
    },
    {
      q: "How do I choose the right strand for me?",
      a: "Consider your interests, strengths, and future career goals. A guidance counselor can help you determine the best fit.",
    },
  ];

  const sanitizePath = (name: string) =>
    "/" + name.replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").toLowerCase();

  const unlockedStrands = ["ICT", "STEM", "ABM", "GAS"];

  const renderStrandCards = (strands: string[], images: string[]) =>
    strands.map((item, index) => {
      const path = sanitizePath(item);
      const isUnlocked = unlockedStrands.includes(item);

      if (!isUnlocked) {
        return (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden bg-gray-100 shadow-lg transform transition hover:scale-[1.02] w-full h-80"
            aria-disabled="true"
            title="Coming soon"
          >
            <div className="absolute inset-0">
              <img
                src={images[index]}
                alt={item}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/Image/placeholder.png";
                }}
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gray-800/40 via-transparent to-transparent" />
            </div>

            <div className="relative z-10 h-full flex flex-col p-5 text-gray-900">
              <div className="flex justify-between items-start gap-2">
                <div>
                  <h3 className="text-2xl font-bold chewy-regular">{item}</h3>
                  <p className="text-sm mt-2 text-gray-700">
                    Designed to prepare you with relevant knowledge and practical skills.
                  </p>
                </div>
                <div className="ml-3">
                  <div className="rounded-full bg-white p-2 shadow">
                    <IoLockClosed className="w-5 h-5 text-gray-700" />
                  </div>
                </div>
              </div>

              <div className="mt-auto">
                <div className="inline-flex items-center gap-2 rounded-full bg-gray-200 px-4 py-2 text-sm text-gray-700 border border-gray-300">
                  <IoLockClosed className="w-4 h-4" />
                  Coming soon
                </div>
              </div>
            </div>
          </div>
        );
      }

      return (
        <article
          key={index}
          className="group relative rounded-2xl overflow-hidden shadow-lg transform transition hover:scale-[1.03] w-full h-80 bg-white border border-gray-200"
        >
          <div className="absolute inset-0">
            <img
              src={images[index]}
              alt={item}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/Image/placeholder.png";
              }}
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
          </div>

          <div className="relative z-10 h-full flex flex-col p-6 text-white">
            <div>
              <h3 className="text-2xl font-semibold chewy-regular">{item}</h3>
              <p className="text-sm mt-2 text-white/90">
                Explore courses and career pathways tailored to the {item} strand.
              </p>
            </div>

            <div className="mt-auto flex gap-3">
              <Link
                to={path}
                className="flex-1 text-center py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold"
                aria-label={`View details for ${item}`}
              >
                View Details
              </Link>
              <button
                className="w-12 rounded-lg bg-white/30 flex items-center justify-center hover:bg-white/40 transition text-yellow-300"
                aria-label="Favorite strand"
              >
                ★
              </button>
            </div>
          </div>
        </article>
      );
    });

  return (
    <div className="min-h-screen w-full bg-linear-to-b from-white to-blue-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <Link to="/Dashboard" className="flex items-center gap-3 text-gray-700 hover:text-gray-900">
            <IoIosArrowBack size={22} />
            <span className="font-medium">Back</span>
          </Link>
          <h1 className="text-3xl font-bold chewy-regular">Strands Explorer</h1>
          <div className="w-24" />
        </div>

        <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-2 rounded-2xl bg-white p-6 border border-gray-200 shadow-md">
            <h2 className="text-4xl font-bold chewy-regular mb-4">Introduction of STRANDS</h2>

            <p className="text-gray-700 leading-relaxed">
              Senior High School (SHS) offers academic and technical-vocational tracks to help you develop skills for higher education or employment.
            </p>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Academic Track</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {renderStrandCards(AcademicStrands, AcademicStrandsImage)}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Other Tracks (Non-Academic)</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {renderStrandCards(OtherStrands, OtherStrandsImage)}
              </div>
            </div>
          </div>

          <aside className="rounded-2xl bg-white p-6 border border-gray-200 shadow-md h-fit">
            <h3 className="text-2xl font-semibold mb-4">FAQ</h3>

            <div className="space-y-3">
              {items.map((it, i) => (
                <div key={i} className="rounded-xl border border-gray-200 shadow-sm bg-gray-50">
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full text-left px-4 py-3 flex items-center justify-between gap-3"
                    aria-expanded={open === i}
                  >
                    <span className="font-medium">{it.q}</span>
                    <span className="text-2xl">{open === i ? "−" : "+"}</span>
                  </button>

                  <div
                    className={`px-4 transition-all duration-300 overflow-hidden ${
                      open === i ? "max-h-60 py-3" : "max-h-0"
                    }`}
                  >
                    <p className="text-sm text-gray-700 leading-relaxed">{it.a}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t pt-4 text-sm text-gray-600">
              Can't find what you need?{" "}
              <Link to="/contact" className="text-blue-600 underline">
                Contact us
              </Link>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}
