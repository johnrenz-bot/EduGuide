import { IoIosArrowBack } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import DashboardHeader from "../../Dashboard/DashboardHeader";
  
export default function ABM() {
    const location = useLocation();
  const guest = (location.state as { user?: any } | undefined)?.user ?? null;
  
  const Grade11Modules = [
    {
      title: "Foundations of Accountancy & Business",
      topics: [
        "Basic accounting concepts & bookkeeping",
        "Business types & organizational structures",
        "Fundamentals of ledgers and journals",
        "Basic financial statements"
      ],
      outcomes: [
        "Record simple business transactions",
        "Prepare basic financial statements"
      ],
      assessments: ["Workshops", "Quizzes", "Bookkeeping exercises"]
    },
    {
      title: "Applied Economics & Market Systems",
      topics: [
        "Supply & demand basics",
        "Business environment and market structures",
        "Economic indicators and basic analysis",
        "Consumer behavior"
      ],
      outcomes: [
        "Explain market interactions and economic factors",
        "Apply basic economic thinking to business decisions"
      ],
      assessments: ["Case studies", "Short exams", "Class presentations"]
    },
    {
      title: "Business Math & Financial Literacy",
      topics: [
        "Percentages, interest, and annuities",
        "Budgeting and cash-flow basics",
        "Simple costing and pricing",
        "Using spreadsheets for calculations"
      ],
      outcomes: ["Perform business-related calculations", "Build basic budgets and cash-flow tables"],
      assessments: ["Problem sets", "Spreadsheet tasks", "Applied quizzes"]
    },
    {
      title: "Principles of Marketing & Customer Insight",
      topics: [
        "Marketing mix (4Ps)",
        "Market research basics",
        "Branding and positioning",
        "Basic digital marketing overview"
      ],
      outcomes: ["Create a simple marketing plan", "Conduct basic customer research"],
      assessments: ["Marketing brief", "Campaign mock-up", "Peer review"]
    },
    {
      title: "Entrepreneurship & Small Business Management",
      topics: [
        "Business idea generation",
        "Feasibility and SWOT analysis",
        "Basic operations & supply chain concepts",
        "Legal & ethical considerations for SMEs"
      ],
      outcomes: ["Draft a simple feasibility study", "Understand small business operations"],
      assessments: ["Mini business plan", "Pitch presentation", "Practical simulation"]
    }
  ];

  const Grade12Modules = [
    {
      title: "Advanced Accounting & Financial Reporting",
      topics: [
        "Adjusting entries & closing procedures",
        "Receivables, payables and inventories",
        "Budgeting and managerial accounting basics",
        "Interpreting financial ratios"
      ],
      outcomes: ["Prepare adjusted financial statements", "Analyze basic financial health metrics"],
      assessments: ["Comprehensive bookkeeping project", "Ratio analysis assignment", "Exam"]
    },
    {
      title: "Business Management & Organizational Behavior",
      topics: [
        "Management functions and planning",
        "Leadership styles and team dynamics",
        "Performance management and HR basics",
        "Quality and operations fundamentals"
      ],
      outcomes: ["Plan and document a small-scale business process", "Apply leadership and team strategies"],
      assessments: ["Group project", "Process documentation", "Reflective report"]
    },
    {
      title: "Advanced Marketing & E-Commerce",
      topics: [
        "Integrated marketing communications",
        "Basic social media & e-commerce setup",
        "Customer journey mapping",
        "Measuring marketing ROI"
      ],
      outcomes: ["Design a multi-channel campaign mock-up", "Set up a simple e-commerce storefront"],
      assessments: ["Campaign project", "E-commerce demo", "Analytics exercise"]
    },
    {
      title: "Business Laws, Ethics & Governance",
      topics: [
        "Business registration & taxes (overview)",
        "Consumer protection laws",
        "Basic corporate governance",
        "Ethical decision-making in business"
      ],
      outcomes: ["Recognize legal steps to start an enterprise", "Apply ethical frameworks to business scenarios"],
      assessments: ["Case analyses", "Compliance checklist", "Policy brief"]
    },
    {
      title: "Capstone — Enterprise Project & Career Prep",
      topics: [
        "Capstone plan and execution",
        "Financial projections and pitch deck",
        "Portfolio & resume preparation",
        "Interview and entrepreneurial readiness"
      ],
      outcomes: ["Deliver a market-ready mini venture and pitch", "Compile an employer-facing portfolio"],
      assessments: ["Capstone deliverable", "Pitch presentation", "Portfolio review"]
    }
  ];

  const SkillsYoullLearn = [
    "Basic accounting & financial literacy",
    "Business planning and operations",
    "Market research and customer insight",
    "Digital marketing fundamentals",
    "Entrepreneurial thinking and communication"
  ];

  // const CareerPaths = [
  //   "Accountant / Bookkeeper",
  //   "Business Owner / Entrepreneur",
  //   "Marketing Associate",
  //   "Financial Analyst (entry-level)",
  //   "Banking & Finance Officer",
  //   "Business Operations Coordinator"
  // ];

  const Projects = [
    {
      name: "Business Plan & Pitch",
      desc: "Develop a full business concept with market analysis, revenue model, and investor-style pitch."
    },
    {
      name: "Financial Statement Simulation",
      desc: "Prepare simulated income statements, balance sheets, and cash flow statements for a model business."
    },
    {
      name: "Marketing Campaign Mock-up",
      desc: "Design a short campaign (branding, target, 1-week plan, sample creative)."
    },
    {
      name: "Entrepreneurship Mini-Venture",
      desc: "Run a small-scale selling activity or school-based enterprise and document operations and results."
    }
  ];

  const Resources = [
    { name: "DepEd K-12 Curriculum (ABM)", href: "https://www.deped.gov.ph" },
    { name: "TESDA — Entrepreneurship Courses", href: "https://www.tesda.gov.ph" },
    { name: "Bureau of Internal Revenue (PH) — Business Guides", href: "https://www.bir.gov.ph" },
    { name: "Business.gov.ph — Starting a Business (Philippines)", href: "https://business.gov.ph" }
  ];

  const FAQ = [
    {
      q: "Is ABM only for aspiring accountants?",
      a: "No. ABM covers accounting, management, marketing, and entrepreneurship—useful across many business careers."
    },
    {
      q: "Does ABM require strong math?",
      a: "ABM uses practical math (finance, percentages, basic algebra). Comfort with numbers helps but focus is applied."
    },
    {
      q: "Will I be job-ready after SHS ABM?",
      a: "With practical projects and optional certs or apprenticeships, many graduates can take entry-level roles or start micro-ventures."
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-yellow-50 text-gray-900">
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
              <div className="rounded-xl bg-white/90 p-6 border border-gray-100 shadow-sm">
                <h1 className="text-3xl font-extrabold chewy-regular text-gray-900">
                  ABM — Accountancy, Business & Management (Grade 11 & 12)
                </h1>
                <p className="mt-2 text-gray-700">
                  DepEd-aligned ABM content focused on practical business skills, financial literacy, and entrepreneurial readiness for senior high learners.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <div className="px-4 py-2 bg-yellow-50 rounded-lg border border-yellow-100 text-sm text-yellow-700">Track: Academic — ABM</div>
                  <div className="px-4 py-2 bg-green-50 rounded-lg border border-green-100 text-sm text-green-700">Outcome: Work-ready / College-ready</div>
                  <div className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-100 text-sm text-gray-700">Duration: 2 years</div>
                </div>
              </div>

              <main className="mt-6 space-y-6">
                <section className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-900">What you'll learn</h2>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {SkillsYoullLearn.map((s, i) => (
                      <div key={i} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-yellow-100 text-yellow-700 font-semibold">{i + 1}</span>
                        <p className="text-sm text-gray-700">{s}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-900">Grade 11 — Foundation Year</h2>
                  <div className="mt-4 grid gap-4">
                    {Grade11Modules.map((m, i) => (
                      <div key={i} className="p-4 rounded-lg bg-linear-to-r from-white to-gray-50 border border-gray-100">
                        <div className="flex justify-between">
                          <h3 className="font-semibold text-gray-900">{m.title}</h3>
                          <span className="text-xs text-gray-500">{m.topics.length} topics</span>
                        </div>
                        <p className="mt-2 text-sm text-gray-700"><strong>Key topics:</strong> {m.topics.join(" • ")}</p>
                        <p className="mt-2 text-sm text-gray-700"><strong>Learning outcomes:</strong> {m.outcomes.join("; ")}</p>
                        <p className="mt-2 text-xs text-gray-500">Assessment: {m.assessments.join(", ")}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-900">Grade 12 — Applied & Capstone Year</h2>
                  <div className="mt-4 grid gap-4">
                    {Grade12Modules.map((m, i) => (
                      <div key={i} className="p-4 rounded-lg bg-linear-to-r from-white to-gray-50 border border-gray-100">
                        <div className="flex justify-between">
                          <h3 className="font-semibold text-gray-900">{m.title}</h3>
                          <span className="text-xs text-gray-500">{m.topics.length} topics</span>
                        </div>
                        <p className="mt-2 text-sm text-gray-700"><strong>Key topics:</strong> {m.topics.join(" • ")}</p>
                        <p className="mt-2 text-sm text-gray-700"><strong>Learning outcomes:</strong> {m.outcomes.join("; ")}</p>
                        <p className="mt-2 text-xs text-gray-500">Assessment: {m.assessments.join(", ")}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-900">Capstone Guidance & Projects</h2>
                  <p className="mt-2 text-sm text-gray-700">
                    Capstone projects should show market understanding, financial planning, and operational readiness. Include a feasibility study, financial projections, a pitch deck, and sales/operations logs.
                  </p>
                  <div className="mt-4 grid gap-3">
                    {Projects.map((p, i) => (
                      <article key={i} className="p-4 border border-gray-100 rounded-lg bg-gray-50">
                        <h4 className="font-semibold text-gray-800">{p.name}</h4>
                        <p className="text-sm mt-1 text-gray-700">{p.desc}</p>
                      </article>
                    ))}
                  </div>
                </section>
              </main>
            </header>

            <aside className="sticky top-8 space-y-4">
              <div className="rounded-xl bg-white/90 backdrop-blur-sm p-5 border border-gray-200 shadow">
                <h3 className="text-lg font-semibold text-gray-900">Quick Info</h3>
                <p className="mt-2 text-sm text-gray-700">Track: ABM • Duration: 2 years • Mode: On-site / Blended</p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <a className="px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 text-center hover:bg-gray-50" href="#contact">Contact</a>
                </div>
              </div>

              <div className="rounded-xl bg-white/90 backdrop-blur-sm p-5 border border-gray-200 shadow">
                <h4 className="font-semibold text-gray-900">FAQ</h4>
                <div className="mt-3 space-y-2 text-sm text-gray-700">
                  {FAQ.map((f, i) => (
                    <details key={i} className="group bg-gray-50 rounded-lg p-2">
                      <summary className="cursor-pointer font-medium list-none">{f.q}</summary>
                      <p className="mt-2 text-sm text-gray-700">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-white/90 backdrop-blur-sm p-5 border border-gray-200 shadow">
                <h4 className="font-semibold text-gray-900">Resources</h4>
                <ul className="mt-3 text-sm text-gray-700 space-y-2">
                  {Resources.map((r, i) => (
                    <li key={i}><a className="text-yellow-700 hover:underline" href={r.href} target="_blank" rel="noreferrer">{r.name}</a></li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500">© ABM — Senior High School</div>
      </div>
    </div>
  );
}
