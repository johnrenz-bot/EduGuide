import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function GAS() {
  const FocusAreas = [
    "Humanities",
    "Social Sciences",
    "Business Fundamentals",
    "Communication",
    "General Research"
  ];

  const WhatYoullLearn = [
    "Critical thinking & problem-solving",
    "Interdisciplinary communication",
    "Leadership & decision-making",
    "Research writing (qualitative & quantitative)",
    "Public speaking and presentations"
  ];

  const Specializations = [
    "Creative Writing",
    "Social Science Electives",
    "Applied Economics",
    "Organization & Management",
    "Humanities Electives"
  ];

  const CareerPaths = [
    "Teacher / Educator",
    "Psychologist / Counselor",
    "Law / Political Science",
    "Journalist / Writer",
    "Public Administrator",
    "Business Management roles"
  ];

  const Projects = [
    {
      name: "Research Paper (Qualitative/Quantitative)",
      desc: "A full paper exploring a social, behavioral, or community issue."
    },
    {
      name: "Community Engagement Project",
      desc: "A hands-on outreach activity addressing local needs."
    },
    {
      name: "Position Paper / Debate Output",
      desc: "Develop arguments on social or political issues using structured reasoning."
    },
    {
      name: "Multidisciplinary Portfolio",
      desc: "A compilation of outputs from humanities, social science, and business subjects."
    }
  ];

  return (
    <div className="w-screen min-h-screen p-6 flex flex-col items-center bg-gray-50">
      <div className="w-full max-w-4xl">

        {/* Back Button */}
        <div className="flex items-center mb-6">
          <Link to="/Strand" className="flex items-center text-sm text-gray-700">
            <IoIosArrowBack size={20} />
            <span className="ml-2">Back to Strands</span>
          </Link>
        </div>

        {/* Header */}
        <header className="bg-white rounded-2xl p-6 shadow mb-6">
          <h1 className="text-3xl font-bold chewy-regular">GAS — General Academic Strand</h1>
          <p className="mt-2 text-sm text-gray-700">
            The GAS strand provides a flexible and balanced curriculum for students who want a broad range of skills across humanities, social sciences, and basic business.
          </p>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">Covers:</h3>
            <p className="text-sm">{FocusAreas.join(" • ")}</p>
          </div>
        </header>

        {/* Main Sections */}
        <main className="flex flex-col gap-6">

          <section className="bg-white rounded-2xl p-6 shadow">
            <h2 className="text-2xl font-semibold mb-3">What you'll learn</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              {WhatYoullLearn.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow">
            <h2 className="text-2xl font-semibold mb-3">Specializations</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              {Specializations.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow">
            <h2 className="text-2xl font-semibold mb-3">Career Pathways</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              {CareerPaths.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow">
            <h2 className="text-2xl font-semibold mb-3">Sample Projects</h2>
            <div className="flex flex-col gap-4">
              {Projects.map((p, i) => (
                <article key={i} className="p-4 border rounded-lg">
                  <h4 className="font-semibold">{p.name}</h4>
                  <p className="text-sm mt-1">{p.desc}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow">
            <h2 className="text-2xl font-semibold mb-3">FAQ</h2>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold">Q: Is GAS for undecided students?</p>
                <p>A: Yes — it offers flexibility for those still exploring career paths.</p>
              </div>

              <div>
                <p className="font-semibold">Q: Is GAS good for college?</p>
                <p>A: Yes! It prepares students for a wide range of courses including education, psychology, business, law, and social sciences.</p>
              </div>

              <div>
                <p className="font-semibold">Q: Does GAS have heavy math or science?</p>
                <p>A: Not as much as STEM — it's more balanced and research-oriented.</p>
              </div>
            </div>
          </section>

          <footer className="text-xs text-gray-500 mb-6">© GAS Strand — Senior High School</footer>

        </main>
      </div>
    </div>
  );
}
