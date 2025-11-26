import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Strand() {
  // This page is focused entirely on the ICT strand content.
  const ICTModules: { title: string; topics: string[] }[] = [
    {
      title: "Programming & Web Development",
      topics: [
        "HTML, CSS, JavaScript",
        "Front-end frameworks (React)",
        "Back-end basics (Node, Express)",
        "Version control (Git)"
      ]
    },
    {
      title: "Systems & Network Fundamentals",
      topics: ["Hardware servicing", "Local area networks (LAN)", "Routing & switching basics", "Troubleshooting"]
    },
    {
      title: "Digital Media & Design",
      topics: ["Graphic design fundamentals", "Multimedia authoring", "Animation basics", "Portfolio creation"]
    },
    {
      title: "Cybersecurity & Data",
      topics: ["Basic cyber hygiene", "Introduction to ethical hacking", "Data privacy", "Backups & recovery"]
    },
    {
      title: "Certifications & Career Prep",
      topics: ["CompTIA A+ / Network+ intro", "Google IT Support", "Portfolio and resume building", "Interview prep"]
    }
  ];

  const SkillsYoullLearn: string[] = [
    "Problem-solving with code",
    "Setting up and maintaining networks",
    "Creating websites and interactive apps",
    "Designing multimedia content",
    "Basic cybersecurity practices"
  ];

  const CareerPaths: string[] = [
    "Software / Web Developer",
    "IT Support Technician",
    "Network Administrator",
    "Multimedia Artist / Designer",
    "Cybersecurity Analyst (entry-level)"
  ];

  const Projects: { name: string; desc: string }[] = [
    { name: "Personal Portfolio Website", desc: "A responsive site showcasing projects, built with React." },
    { name: "Local Network Setup", desc: "Design and configure a small LAN with proper documentation." },
    { name: "Multimedia Short", desc: "Create a 30–60s animated or video clip demonstrating storytelling." },
    { name: "Mini Security Audit", desc: "Perform a basic security checklist and hardening for a sample system." }
  ];

//   const sanitizePath = (name: string) => {
//     return "/" + name.replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
//   };

  return (
    <div className="w-screen min-h-screen p-6 flex flex-col items-center bg-gray-50">
      <div className="w-full max-w-4xl">
        <div className="flex items-center mb-6">
          <Link to="/Strand" className="flex items-center text-sm text-gray-700">
            <IoIosArrowBack size={20} />
            <span className="ml-2">Back to Strands</span>
          </Link>
        </div>

        {/* Header / Hero */}
        <header className="bg-white rounded-2xl p-6 shadow mb-6">
          <h1 className="text-3xl font-bold chewy-regular">ICT — Information and Communications Technology</h1>
          <p className="mt-2 text-sm text-gray-700">A practical, career-oriented strand that equips learners with computing, networking, digital media, and cybersecurity skills.</p>

          <div className="mt-4 flex flex-col sm:flex-row sm:justify-between gap-2">
            <div>
              <h3 className="text-sm font-semibold">Track</h3>
              <p className="text-sm">Technical-Vocational-Livelihood (TVL)</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Outcome</h3>
              <p className="text-sm">Job-ready or college-ready for IT-related degrees</p>
            </div>
          </div>
        </header>

        {/* Document-like stacked sections (flex-col) */}
        <main className="flex flex-col gap-6">
          <section className="bg-white rounded-2xl p-6 shadow">
            <h2 className="text-2xl font-semibold mb-3">What you'll learn</h2>
            <ul className="list-disc pl-5 space-y-2 text-sm">
              {SkillsYoullLearn.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow">
            <h2 className="text-2xl font-semibold mb-3">Core Modules</h2>
            <div className="flex flex-col divide-y">
              {ICTModules.map((m, i) => (
                <div key={i} className="py-4">
                  <h3 className="font-semibold">{m.title}</h3>
                  <p className="text-sm mt-1">{m.topics.join(' • ')}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow">
            <h2 className="text-2xl font-semibold mb-3">Career Pathways & Certifications</h2>
            <div className="flex flex-col gap-4">
              <div>
                <h4 className="font-semibold">Career Pathways</h4>
                <ul className="list-disc pl-5 mt-2 text-sm">
                  {CareerPaths.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold">Certifications to consider</h4>
                <ul className="list-disc pl-5 mt-2 text-sm">
                  <li>CompTIA A+ (hardware & support basics)</li>
                  <li>CompTIA Network+ (network fundamentals)</li>
                  <li>Google IT Support Professional Certificate (entry-level IT)</li>
                  <li>Microsoft / Cisco foundational badges (as available)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow">
            <h2 className="text-2xl font-semibold mb-3">Sample Projects & Portfolios</h2>
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
            <h2 className="text-2xl font-semibold mb-3">Suggested Learning Path (2 years)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li><strong>Year 11:</strong> Fundamentals — basic programming, hardware servicing, basic design, simple networks.</li>
              <li><strong>Year 12:</strong> Applied — full web project, deeper networking, basic cybersecurity, capstone portfolio.</li>
            </ol>
          </section>

          <section className="bg-white rounded-2xl p-6 shadow">
            <h2 className="text-2xl font-semibold mb-3">FAQ</h2>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold">Q: Is ICT only for students who want to be programmers?</p>
                <p>A: No — ICT covers many paths including support, networking, multimedia, and basic cybersecurity.</p>
              </div>

              <div>
                <p className="font-semibold">Q: Will I be able to work right after SHS?</p>
                <p>A: With practical skills and certifications, many graduates qualify for entry-level IT jobs or apprenticeships.</p>
              </div>

              <div>
                <p className="font-semibold">Q: What should I build for my portfolio?</p>
                <p>A: A personal portfolio website, at least one web app, and a documented practical project (network or multimedia) are great starters.</p>
              </div>
            </div>
          </section>

          <footer className="text-xs text-gray-500">© ICT Strand — Senior High School</footer>
        </main>
      </div>
    </div>
  );
}
