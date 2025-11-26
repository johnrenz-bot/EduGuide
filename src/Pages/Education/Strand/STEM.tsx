import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function STEM() {
  const STEMFields = [
    "Science",
    "Technology",
    "Engineering",
    "Mathematics"
  ];

  const WhatYoullLearn = [
    "Scientific inquiry & laboratory skills",
    "Mathematical reasoning & problem-solving",
    "Engineering design principles",
    "Technology & innovation literacy",
    "Research skills (quantitative & qualitative)"
  ];

  const CareerPaths = [
    "Engineer",
    "Doctor / Nurse",
    "Scientist / Researcher",
    "IT / Computer Scientist",
    "Architect",
    "Mathematician / Statistician"
  ];

  const SampleSubjects = [
    "General Biology 1 & 2",
    "General Physics 1 & 2",
    "General Chemistry 1 & 2",
    "Pre-Calculus & Basic Calculus",
    "Earth & Life Science, Physical Science",
    "Research 1 & 2 (Capstone)"
  ];

  const Projects = [
    {
      name: "Science Investigatory Project (SIP)",
      desc: "A full scientific research project involving experimentation and documentation."
    },
    {
      name: "Engineering Mini-Build",
      desc: "Create a prototype/model demonstrating engineering principles."
    },
    {
      name: "Tech Innovation Concept",
      desc: "Propose a solution using technology to solve a real-world problem."
    },
    {
      name: "Mathematical Modeling",
      desc: "Use statistics or calculus concepts to analyze real-life scenarios."
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
          <h1 className="text-3xl font-bold chewy-regular">STEM — Science, Technology, Engineering & Mathematics</h1>
          <p className="mt-2 text-sm text-gray-700">
            The STEM strand prepares students for college programs involving science, math, engineering, and technology. 
            It builds strong analytical, research, and problem-solving skills.
          </p>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">Fields covered:</h3>
            <p className="text-sm">{STEMFields.join(" • ")}</p>
          </div>
        </header>

        {/* Main Document Sections */}
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
            <h2 className="text-2xl font-semibold mb-3">Core Subjects</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              {SampleSubjects.map((subject, i) => (
                <li key={i}>{subject}</li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow">
            <h2 className="text-2xl font-semibold mb-3">Career Pathways</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              {CareerPaths.map((career, i) => (
                <li key={i}>{career}</li>
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
                <p className="font-semibold">Q: Is STEM difficult?</p>
                <p>A: It is challenging, but manageable with discipline. It focuses heavily on math and science.</p>
              </div>

              <div>
                <p className="font-semibold">Q: Is STEM required to take engineering or medicine?</p>
                <p>A: It is highly recommended, especially for courses like engineering, nursing, biology, and medical fields.</p>
              </div>

              <div>
                <p className="font-semibold">Q: What skills should I have?</p>
                <p>A: Curiosity, analytical thinking, problem-solving, and willingness to study math-heavy subjects.</p>
              </div>
            </div>
          </section>

          <footer className="text-xs text-gray-500 mb-6">© STEM Strand — Senior High School</footer>

        </main>
      </div>
    </div>
  );
}
