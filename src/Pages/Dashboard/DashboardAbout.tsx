import React from "react";
import { useLocation, Link } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";

type Guest = {
  role: string;
  username: string;
  isGuest?: boolean;
};
type LocationState = {
  user?: Guest | null;
};

export default function DashboardAbout() {
  const location = useLocation();
  const guest = (location.state as LocationState)?.user ?? null;

  const stats = [
    { label: "Strands", value: 12 },
    { label: "Courses", value: 84 },
    { label: "Career Guides", value: 24 },
  ];

  const features = [
    {
      title: "Explore Strands",
      desc: "Browse academic strands to find the path that fits you.",
      link: "/dashboard/strands",
    },
    {
      title: "Compare Courses",
      desc: "Compare college courses, requirements and career outcomes.",
      link: "/dashboard/courses",
    },
    {
      title: "Career Paths",
      desc: "See suggested careers for each course or strand.",
      link: "/dashboard/careers",
    },
  ];

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <DashboardHeader guest={guest} />
      <nav aria-label="Breadcrumb" className="text-sm text-gray-600 my-4">
        <ol className="flex gap-2 items-center">
          <li>
            <Link to="/dashboard" className="hover:underline">
              Dashboard
            </Link>
            <span className="mx-2">/</span>
          </li>
          <li aria-current="page" className="font-medium text-gray-800">
            About
          </li>
        </ol>
      </nav>

      <section className="bg-white rounded-2xl shadow-sm p-6 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">About EduGuide</h1>
            <p className="text-gray-700 max-w-2xl">
              EduGuide helps students discover academic strands, compare college courses, and
              explore career pathways — empowering informed decisions for your future.
            </p>
            <div className="mt-4 flex gap-3">
              <Link
                to="/Strand"
                className="inline-block px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold shadow-sm hover:bg-indigo-700"
                aria-label="Get started with EduGuide"
              >
                Get started
              </Link>
              <Link
                to="/dashboard/contact"
                className="inline-block px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50"
                aria-label="Contact support"
              >
                Contact us
              </Link>
            </div>
          </div>

          <div className="flex gap-4">
            {stats.map((s) => (
              <div key={s.label} className="p-4 bg-gray-50 rounded-lg text-center min-w-[110px]">
                <div className="text-2xl font-bold text-gray-900">{s.value}</div>
                <div className="text-sm text-gray-600">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-4 mb-6">
        {features.map((f) => (
          <article key={f.title} className="p-5 bg-white rounded-xl shadow-sm hover:shadow-md transition">
            <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
            <p className="text-gray-600 mb-4">{f.desc}</p>
            <Link to={f.link} className="text-indigo-600 font-medium hover:underline">
              Explore →
            </Link>
          </article>
        ))}
      </section>

      <section className="mb-6 bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          Founded in 2024, EduGuide aims to bridge the gap between students and the wealth of
          information about education and careers. We believe every student deserves access to
          clear, well-researched guidance while navigating their academic path.
        </p>

        <h3 className="text-xl font-semibold mt-4 mb-2">What we focus on</h3>
        <ul className="list-disc list-inside text-gray-700">
          <li>Clear comparisons of course content and career outcomes</li>
          <li>Guided pathways from strands → courses → careers</li>
          <li>Support resources for students and parents</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-3">Team & Contributors</h3>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="font-medium">EduGuide Team</div>
            <div className="text-sm text-gray-600">Design · Product · Content</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="font-medium">Academic Advisors</div>
            <div className="text-sm text-gray-600">Subject-matter experts</div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <div className="font-medium">Partners</div>
            <div className="text-sm text-gray-600">Colleges & Career orgs</div>
          </div>
        </div>
      </section>

      <section className="mt-8 text-center">
        <p className="text-gray-700 mb-3">Want to contribute or suggest improvements?</p>
        <Link to="/dashboard/contribute" className="inline-block px-5 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700">
          Contribute
        </Link>
      </section>
    </main>
  );
}
