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
    { label: "Strands", value: 4 },
    { label: "Courses", value: 3 },
    { label: "Career Guides", value: 0 },
  ];

  const features = [
    {
      title: "Explore Strands",
      desc: "Browse academic strands to find the path that fits you best.",
      link: "/dashboard/strands",
    },
    {
      title: "Compare Courses",
      desc: "Understand course requirements, workload, and future pathways.",
      link: "/dashboard/courses",
    },
    {
      title: "Career Paths",
      desc: "Discover careers aligned with your strengths and interests.",
      link: "/dashboard/careers",
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100">
      <DashboardHeader guest={guest} />

      <div className="max-w-6xl mx-auto px-4 py-8">

        <nav className="text-sm font-medium text-gray-600 mb-6">
          <ol className="flex gap-2 items-center">
            <li>
              <Link to="/dashboard" className="hover:text-indigo-600">
                Dashboard
              </Link>
            </li>
            <span>/</span>
            <li className="text-gray-900">About</li>
          </ol>
        </nav>

        <section className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 mb-12">
          <div className="flex flex-col md:flex-row md:justify-between gap-10">

            <div className="flex-1">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                About EduGuide
              </h1>

              <p className="text-gray-700 leading-relaxed max-w-xl">
                Your all-in-one companion for choosing strands, finding suitable
                college courses, and exploring real career opportunities. EduGuide
                empowers students with clarity and confidence as they map out their future.
              </p>

              <div className="mt-6 flex gap-4">
                <Link
                  to="/dashboard"
                  className="px-5 py-2.5 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-700 transition"
                >
                  Get Started
                </Link>

                <Link
                  to="/dashboard/contact"
                  className="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="flex gap-4 md:gap-6 md:flex-col">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="p-5 bg-gray-50 rounded-xl text-center shadow-inner min-w-[120px] hover:bg-gray-100 transition"
                >
                  <div className="text-3xl font-bold text-gray-900">{s.value}</div>
                  <div className="text-gray-600 text-sm">{s.label}</div>
                </div>
              ))}
            </div>

          </div>
        </section>

        <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {features.map((f) => (
            <article
              key={f.title}
              className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 transition hover:shadow-lg hover:-translate-y-1"
            >
              <h3 className="text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{f.desc}</p>
              <Link
                to={f.link}
                className="text-indigo-600 font-medium hover:text-indigo-700"
              >
                Explore →
              </Link>
            </article>
          ))}
        </section>

        <section className="bg-white rounded-2xl shadow-sm p-10 border border-gray-100 mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Established in 2024, EduGuide aims to transform the way students understand
            their academic options. We believe every student deserves guidance that is clear,
            reliable, and tailored to their goals.
          </p>

          <h3 className="text-xl font-semibold mb-3">We Focus On</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>Clear comparisons of course workload and career opportunities</li>
            <li>Guided pathways from strands → courses → careers</li>
            <li>Resources to support students, teachers, and parents</li>
          </ul>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-5">Team & Contributors</h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "EduGuide Team", desc: "Product · Design · Content" },
              { title: "Academic Advisors", desc: "Guidance & Subject Experts" },
              { title: "Partners", desc: "Colleges & Career Organizations" },
            ].map((t) => (
              <div
                key={t.title}
                className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition"
              >
                <div className="font-semibold text-gray-900">{t.title}</div>
                <div className="text-sm text-gray-600 mt-1">{t.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center py-10">
          <p className="text-gray-700 mb-3">
            Want to help improve EduGuide or share suggestions?
          </p>
          <Link
            to="/dashboard/contribute"
            className="px-6 py-2.5 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
          >
            Contribute
          </Link>
        </section>

      </div>
    </main>
  );
}
