import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoLockClosed } from "react-icons/io5";
import { Link } from "react-router-dom";

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

  const sanitizePath = (name: string) => {
    return "/" + name.replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").toLowerCase();
  };

  // List of strands that should be unlocked (i.e. NOT locked)
  const unlockedStrands = ["ICT", "STEM", "ABM", "GAS"];

  const renderStrandCards = (strands: string[], images: string[]) => {
    return strands.map((item: string, index: number) => {
      const path = sanitizePath(item);
      const baseClasses = `relative rounded-3xl overflow-hidden shadow-xl transition-all duration-300`;

      const isUnlocked = unlockedStrands.includes(item);

      // If the strand is locked (not in unlockedStrands), render the locked card
      if (!isUnlocked) {
        return (
          <div
            key={index}
            className={`${baseClasses} w-full h-80 bg-black/40 backdrop-blur-md border border-white/10 text-white flex flex-col`}
            aria-disabled="true"
            role="button"
            title="Coming soon"
          >
            <div className="h-32 w-full overflow-hidden">
              <img
                src={images[index]}
                alt={item}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = "/Image/placeholder.png";
                }}
                className="w-full h-full object-cover opacity-50"
              />
            </div>

            <div className="p-4 flex flex-col items-center text-center relative flex-1">
              <div className="absolute top-3 right-3 bg-white/90 rounded-full p-2 shadow-sm">
                <IoLockClosed className="w-4 h-4 text-gray-800" />
                <span className="sr-only">Locked</span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="rounded-full bg-white/10 backdrop-blur-xl p-4 shadow-md border border-white/10">
                  <IoLockClosed className="w-8 h-8 text-white opacity-90" />
                </div>
              </div>

              <h2 className="text-xl font-semibold tracking-wide chewy-regular z-10">{item}</h2>
              <p className="text-sm mt-2 z-10">
                Explore the {item} strand and discover courses, skills, and career paths designed
                for your interests and goals.
              </p>

              <div className="w-full mt-auto">
                <div className="w-full py-3 rounded-xl text-center text-md font-semibold bg-white/10 text-white border border-white/20">
                  View Details
                </div>
              </div>
            </div>
          </div>
        );
      }

      // Otherwise render the unlocked (clickable) card
      return (
        <div
          key={index}
          className={`${baseClasses} w-full h-80 backdrop-blur-xl bg-white/10 border border-white/20 text-black flex flex-col`}
        >
          <div className="h-32 w-full overflow-hidden">
            <img
              src={images[index]}
              alt={item}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/Image/placeholder.png";
              }}
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-300"
            />
          </div>

          <div className="p-4 flex flex-col items-center text-center flex-1">
            <h2 className="text-xl font-semibold tracking-wide chewy-regular">{item}</h2>
            <p className="text-sm mt-2 flex-1">
              Explore the {item} strand and discover courses, skills, and career paths designed
              for your interests and goals.
            </p>

            <Link
              to={path}
              className="w-full py-3 bg-white/20 border border-white/40 rounded-xl text-center text-md font-semibold transition-all duration-300 hover:bg-white/40 hover:text-gray-900 hover:border-white/70 hover:shadow-lg active:scale-95"
            >
              View Details
            </Link>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="w-screen h-screen flex justify-center">
      <div className="absolute top-4 left-4 flex items-center gap-2">
        <Link to="/" className="flex items-center">
          <IoIosArrowBack size={25} /> Landing Page
        </Link>
      </div>

      <div className="scrollbar-transparent w-[55%] h-full flex flex-col gap-6 overflow-y-auto p-4">
        <div className="w-full h-[50%] border-b flex flex-col gap-4 justify-center items-center">
          <h1 className="text-5xl font-bold chewy-regular">Introduction of STRAND'S</h1>
          <p>
            Senior High School (SHS) in the Philippines offers students the opportunity to
            specialize in academic or technical-vocational tracks. Each strand is designed to help
            you develop skills and knowledge that will prepare you for higher education or
            employment.
          </p>
          <p>
            Choosing the right strand can guide your future career path, whether you are inclined
            toward science, business, arts, technology, or sports. It allows you to explore your
            interests, discover talents, and gain relevant experiences during your senior high
            years.
          </p>
        </div>

        <div className="w-full h-[50%] border-b flex flex-col gap-4 justify-center items-center">
          <h1 className="text-5xl font-bold chewy-regular">FAQ</h1>
          <p>
            Q: What is the difference between Academic and Technical-Vocational strands? <br />
            A: Academic strands focus on preparing students for college courses, while
            Technical-Vocational strands equip students with practical skills for immediate
            employment or entrepreneurship.
          </p>
          <p>
            Q: Can I switch strands in SHS? <br />
            A: Switching strands is possible at the start of the school year, subject to the
            school’s policies and availability of slots in the desired strand.
          </p>
          <p>
            Q: How do I choose the right strand for me? <br />
            A: Consider your interests, strengths, and future career plans. Consult with your
            guidance counselor for advice based on your skills and aspirations.
          </p>
        </div>

        <div className="w-full flex flex-col gap-6">
          <div className="w-full text-center">
            <h1 className="text-5xl font-bold chewy-regular">Strands Lists</h1>
            <p>Choose a senior high school strand to explore and learn more about your options.</p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">Academic Track</h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
              {renderStrandCards(AcademicStrands, AcademicStrandsImage)}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-4">Other Tracks (Non-Academic)</h2>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
              {renderStrandCards(OtherStrands, OtherStrandsImage)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
