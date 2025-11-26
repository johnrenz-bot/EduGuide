import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function ABM() {
  const WhatYoullLearn = [
    "Financial literacy & accounting fundamentals",
    "Business management & decision-making",
    "Entrepreneurship & business planning",
    "Marketing strategies & consumer behavior",
    "Leadership, communication, and organizational skills"
  ];

  const CoreSubjects = [
    "Fundamentals of Accountancy, Business, and Management (FABM 1 & 2)",
    "Applied Economics",
    "Business Math",
    "Business Ethics & Social Responsibility",
    "Organization and Management",
    "Principles of Marketing"
  ];

  const CareerPaths = [
    "Accountant / Auditor",
    "Entrepreneur / Business Owner",
    "Marketing Specialist",
    "Financial Analyst",
    "Banking & Finance Officer",
    "Business Manager"
  ];

  const Projects = [
    {
      name: "Business Plan & Pitch",
      desc: "Create a full business concept with feasibility study and pitch presentation."
    },
    {
      name: "Financial Statement Simulation",
      desc: "Prepare income statements, balance sheets, and cash flow reports for a sample business."
    },
    {
      name: "Marketing Campaign Project",
      desc: "Design a promotional plan including branding, audience analysis, and ad mock-ups."
    },
    {
      name: "Entrepreneurship Mini-Venture",
      desc: "Run a small business simulation or school-based entrepreneurial activity."
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
          <h1 className="text-3xl font-bold chewy-regular">ABM — Accountancy, Business & Management</h1>
          <p className="mt-2 text-sm text-gray-700">
            The ABM strand is designed for future business leaders, entrepreneurs, accountants, and corporate professionals.
            It focuses on finance, marketing, management, and business operations.
          </p>

          <div className="mt-4">
            <h3 className="text-lg font-semibold">Focus Areas:</h3>
            <p className="text-sm">Accounting • Business Management • Economics • Entrepreneurship • Marketing</p>
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
            <h2 className="text-2xl font-semibold mb-3">Core Subjects</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              {CoreSubjects.map((subject, i) => (
                <li key={i}>{subject}</li>
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
                <p className="font-semibold">Q: Is ABM only for aspiring accountants?</p>
                <p>A: No — it covers marketing, management, entrepreneurship, and financial literacy.</p>
              </div>

              <div>
                <p className="font-semibold">Q: Is math heavy in ABM?</p>
                <p>A: Math is used, especially in accounting and finance, but it's manageable and practical.</p>
              </div>

              <div>
                <p className="font-semibold">Q: Can ABM lead to good business careers?</p>
                <p>A: Yes — many students take ABM to prepare for business management, finance, and entrepreneurial careers.</p>
              </div>
            </div>
          </section>

          <footer className="text-xs text-gray-500 mb-6">© ABM Strand — Senior High School</footer>

        </main>
      </div>
    </div>
  );
}
