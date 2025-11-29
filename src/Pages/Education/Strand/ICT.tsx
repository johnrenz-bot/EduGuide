import { IoIosArrowBack } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import DashboardHeader from "../../Dashboard/DashboardHeader";  

export default function Strand() {
    const location = useLocation();
  const guest = (location.state as { user?: any } | undefined)?.user ?? null;
  

  const Grade11Modules = [
    {
      title: "Introduction to ICT & Digital Literacy",
      topics: [
        "Computer fundamentals & OS basics",
        "File management and productivity tools",
        "Responsible digital citizenship",
        "Basic troubleshooting"
      ],
      outcomes: [
        "Operate basic computer functions and productivity apps",
        "Apply safe and responsible online behavior"
      ],
      assessments: ["Practical tasks", "Short quizzes", "Class participation"]
    },
    {
      title: "Fundamentals of Programming",
      topics: [
        "Algorithm thinking & problem solving",
        "Intro to programming concepts (variables, control flow)",
        "Simple programs using block-based tools or Python",
        "Basic debugging"
      ],
      outcomes: [
        "Write simple programs to solve problems",
        "Trace and debug program output"
      ],
      assessments: ["Coding exercises", "Mini project", "Code walkthrough"]
    },
    {
      title: "Web Development Basics",
      topics: [
        "HTML structure & semantic tags",
        "CSS basics and layouts",
        "Intro to JavaScript interactions",
        "Building a simple static site"
      ],
      outcomes: [
        "Create a multi-page static website",
        "Style pages with CSS and add basic interactivity"
      ],
      assessments: ["Website deliverable", "Peer review", "Checklist-based demo"]
    },
    {
      title: "Hardware Servicing & Maintenance",
      topics: [
        "PC components & peripherals",
        "Basic assembly/disassembly",
        "Preventive maintenance",
        "Safety and ESD basics"
      ],
      outcomes: ["Identify hardware parts and perform basic servicing"],
      assessments: ["Practical assessment", "Logbook"]
    },
    {
      title: "Multimedia Foundations",
      topics: [
        "Basic image editing (raster & vector concepts)",
        "Intro to audio/video editing",
        "Design principles and file export",
        "Creating simple multimedia projects"
      ],
      outcomes: ["Produce short multimedia content for a portfolio"],
      assessments: ["Project-based", "Rubric evaluation"]
    }
  ];

  const Grade12Modules = [
    {
      title: "Advanced Programming & Apps",
      topics: [
        "Object-oriented concepts (classes, objects)",
        "Using APIs and data I/O",
        "Building small CRUD apps (frontend + simple backend)",
        "Version control workflows (Git)"
      ],
      outcomes: [
        "Develop a small full-stack application",
        "Collaborate using version control"
      ],
      assessments: ["Capstone project milestone demos", "Code repo submission"]
    },
    {
      title: "Web Apps & Responsive Design",
      topics: [
        "Responsive layouts and accessibility",
        "Client-side frameworks intro (React / Vue concepts)",
        "State management basics",
        "Deploying static & simple dynamic sites"
      ],
      outcomes: ["Build and deploy a responsive web app with basic interactivity"],
      assessments: ["Deployed project", "User testing report"]
    },
    {
      title: "Networking & System Administration",
      topics: [
        "Network topologies and IP concepts",
        "Basic routing and switching commands",
        "Setting up a LAN and shared services",
        "Intro to virtualization and cloud basics"
      ],
      outcomes: ["Configure a small functional network and troubleshoot common issues"],
      assessments: ["Practical lab setup", "Network documentation"]
    },
    {
      title: "Intro to Cybersecurity",
      topics: [
        "Security fundamentals and risk awareness",
        "Basic threat identification (phishing, malware)",
        "Hardening practices and backups",
        "Legal & ethical considerations"
      ],
      outcomes: ["Apply basic security hardening and incident response steps"],
      assessments: ["Security checklist audit", "Scenario-based assessment"]
    },
    {
      title: "Capstone & Industry Prep",
      topics: [
        "Project planning and documentation",
        "Portfolio creation and presentation",
        "Cert prep fundamentals (CompTIA/Google intros)",
        "Career readiness: resume, interviews"
      ],
      outcomes: ["Complete a capstone portfolio suitable for entry-level roles or further studies"],
      assessments: ["Capstone presentation", "Portfolio review", "Mock interviews"]
    }
  ];

  // const SuggestedResources = [
  //   { name: "MDN Web Docs", href: "https://developer.mozilla.org" },
  //   { name: "W3Schools / freeCodeCamp", href: "https://www.freecodecamp.org" },
  //   { name: "Google IT Support (Coursera)", href: "https://coursera.org" },
  //   { name: "CompTIA (exam info)", href: "https://www.comptia.org" }
  // ];

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-blue-50 text-gray-900">
        <DashboardHeader guest={guest} />

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center gap-4 mb-6">
          <Link to="/Strand" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <IoIosArrowBack size={20} />
            <span className="text-sm">Back to Strands</span>
          </Link>
        </div>

        <div className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <header className="lg:col-span-2">
              <div className="rounded-xl bg-white/80 p-6 border border-white/70 shadow-sm">
                <h1 className="text-3xl font-extrabold chewy-regular text-gray-900">
                  TVL ICT — Senior High School (Grade 11 & 12)
                </h1>
                <p className="mt-2 text-gray-700">
                  DepEd-aligned TVL ICT content focused on practical skills and industry-ready outcomes for Grade 11 and Grade 12 learners.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <div className="px-4 py-2 bg-blue-50 rounded-lg border border-blue-100 text-sm text-blue-700">
                    Track: TVL ICT
                  </div>
                  <div className="px-4 py-2 bg-green-50 rounded-lg border border-green-100 text-sm text-green-700">
                    Outcome: Job-ready / College-ready
                  </div>
                  <div className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-100 text-sm text-gray-700">
                    Duration: 2 years (Grade 11 & 12)
                  </div>
                </div>
              </div>

              <main className="mt-6 space-y-6">
                <section className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-900">Grade 11 — Foundation Year</h2>
                  <p className="mt-2 text-sm text-gray-700">
                    Grade 11 focuses on fundamentals: digital literacy, basic programming, web foundations, hardware, and multimedia basics. Emphasis on hands-on tasks and workplace readiness.
                  </p>

                  <div className="mt-4 grid gap-4">
                    {Grade11Modules.map((m, i) => (
                      <div key={i} className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                        <div className="flex justify-between items-start">
                          <h3 className="font-semibold text-gray-900">{m.title}</h3>
                          <span className="text-xs text-gray-500">{m.topics.length} topics</span>
                        </div>
                        <p className="mt-2 text-sm text-gray-700">
                          <strong>Key topics:</strong> {m.topics.join(" • ")}
                        </p>
                        <p className="mt-2 text-sm text-gray-700">
                          <strong>Learning outcomes:</strong> {m.outcomes.join("; ")}
                        </p>
                        <p className="mt-2 text-xs text-gray-500">Assessment: {m.assessments.join(", ")}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-900">Grade 12 — Applied & Capstone Year</h2>
                  <p className="mt-2 text-sm text-gray-700">
                    Grade 12 builds on the foundation with applied projects, deeper programming, networking, cybersecurity basics, and an employer-facing capstone portfolio.
                  </p>

                  <div className="mt-4 grid gap-4">
                    {Grade12Modules.map((m, i) => (
                      <div key={i} className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                        <div className="flex justify-between items-start">
                          <h3 className="font-semibold text-gray-900">{m.title}</h3>
                          <span className="text-xs text-gray-500">{m.topics.length} topics</span>
                        </div>
                        <p className="mt-2 text-sm text-gray-700">
                          <strong>Key topics:</strong> {m.topics.join(" • ")}
                        </p>
                        <p className="mt-2 text-sm text-gray-700">
                          <strong>Learning outcomes:</strong> {m.outcomes.join("; ")}
                        </p>
                        <p className="mt-2 text-xs text-gray-500">Assessment: {m.assessments.join(", ")}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-900">Capstone Guidance</h2>
                  <p className="mt-2 text-sm text-gray-700">
                    Recommended capstone: a portfolio that includes a deployed web app or documented network/project, project report, and a reflection on tools/skills applied. Include evidence: screenshots, code repo links, wiring diagrams, and user testing notes.
                  </p>
                  <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 space-y-1">
                    <li>Deliver a project plan, milestones, and final demo</li>
                    <li>Keep a lab/logbook or Git repo as evidence</li>
                    <li>Prepare a short presentation and documentation</li>
                  </ul>
                </section>
              </main>
            </header>

            <aside className="sticky top-8 space-y-4">
              <div className="rounded-xl bg-white/90 backdrop-blur-sm p-5 border border-gray-200 shadow">
                <h3 className="text-lg font-semibold text-gray-900">Quick Info</h3>
                <p className="mt-2 text-sm text-gray-700">Mode: On-site / Blended • Work-based learning recommended</p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <a className="px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 text-center hover:bg-gray-50" href="#contact">Contact</a>
                </div>
              </div>

              <div className="rounded-xl bg-white/90 backdrop-blur-sm p-5 border border-gray-200 shadow">
                <h4 className="font-semibold text-gray-900">FAQ</h4>
                <div className="mt-3 space-y-2 text-sm text-gray-700">
                  <details className="group bg-gray-50 rounded-lg p-2">
                    <summary className="cursor-pointer font-medium list-none">Is ICT only for programmers?</summary>
                    <p className="mt-2 text-sm text-gray-700">No — ICT includes networking, multimedia, hardware, and cybersecurity pathways in addition to programming.</p>
                  </details>

                  <details className="group bg-gray-50 rounded-lg p-2">
                    <summary className="cursor-pointer font-medium list-none">Can I get certified?</summary>
                    <p className="mt-2 text-sm text-gray-700">Yes — students are encouraged to pursue entry-level certs (CompTIA A+, Network+, Google IT) as optional credentials.</p>
                  </details>
                </div>
              </div>

              <div className="rounded-xl bg-white/90 backdrop-blur-sm p-5 border border-gray-200 shadow">
                <h4 className="font-semibold text-gray-900">Resources</h4>
                <ul className="mt-3 text-sm text-gray-700 space-y-2">
                  <li><a className="text-blue-600 hover:underline" href="https://developer.mozilla.org" target="_blank" rel="noreferrer">MDN Web Docs</a></li>
                  <li><a className="text-blue-600 hover:underline" href="https://www.freecodecamp.org" target="_blank" rel="noreferrer">freeCodeCamp</a></li>
                  <li><a className="text-blue-600 hover:underline" href="https://www.comptia.org" target="_blank" rel="noreferrer">CompTIA</a></li>
                </ul>
              </div>

            </aside>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500">© TVL ICT — Senior High School</div>
      </div>
    </div>
  );
}
