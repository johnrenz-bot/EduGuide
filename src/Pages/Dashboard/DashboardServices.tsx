import React from "react";
import { Link, useLocation } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";

type Guest = {
  role: string;
  username: string;
  isGuest?: boolean;
};
type LocationState = {
  user?: Guest | null;
};

export default function DashboardServices() {
  const location = useLocation();
  const guest = (location.state as LocationState)?.user ?? null;

  const services = [
    {
      title: "Personalized Guidance",
      desc: "Tailored advice to help students choose the right academic strands and college courses.",
    },
    {
      title: "Career Counseling",
      desc: "Insights into future career paths, job trends, and opportunities to help students plan ahead.",
    },
    {
      title: "Resource Library",
      desc: "Access curated articles, videos, tools, and educational materials.",
    },
    {
      title: "Workshops and Webinars",
      desc: "Interactive sessions led by industry professionals and educators.",
    },
    {
      title: "Community Support",
      desc: "Join a student and mentor community to share experiences and receive support.",
    },
  ];

  const premium = [
    {
      title: "1-on-1 Mentorship",
      desc: "Book sessions with certified career mentors for personalized advice.",
    },
    {
      title: "Strand & Course Track Builder",
      desc: "Auto-generated planning tool based on your strengths and future goals.",
    },
    {
      title: "Career Roadmap Generator",
      desc: "A step-by-step customized career plan from senior high to college and beyond.",
    },
  ];

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <DashboardHeader guest={guest} />

      <nav aria-label="Breadcrumb" className="text-sm text-gray-600 my-4">
        <ol className="flex gap-2 items-center">
          <li>
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
            <span className="mx-2">/</span>
          </li>
          <li aria-current="page" className="font-medium text-gray-800">
            Services
          </li>
        </ol>
      </nav>

      <section className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-gray-700 mb-6">
          EduGuide provides tools, resources, and support to help students explore academic paths 
          and prepare for their future careers.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-5 bg-gray-50 rounded-lg hover:bg-gray-100 transition border border-gray-200"
            >
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Premium Features</h2>
        <p className="text-gray-700 mb-6">
          Unlock advanced tools designed to give you a deeper understanding of your academic 
          and career journey.
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          {premium.map((item) => (
            <div
              key={item.title}
              className="p-5 bg-gray-50 rounded-lg hover:bg-gray-100 transition border border-gray-200"
            >
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-xl shadow-sm p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">How We Help Students Succeed</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>Identify strengths, interests, and academic preferences.</li>
          <li>Gain clarity on senior high school strands and college course options.</li>
          <li>Explore career opportunities aligned with chosen paths.</li>
          <li>Receive up-to-date labor market insights and industry trends.</li>
          <li>Plan educational pathways with structured guides and timelines.</li>
        </ul>
      </section>

      <section className="text-center">
        <p className="text-gray-700 mb-3">Ready to explore all EduGuide features?</p>
        <Link
          to="/dashboard/get-started"
          className="inline-block px-6 py-2 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700"
        >
          Get Started
        </Link>
      </section>
    </main>
  );
}
