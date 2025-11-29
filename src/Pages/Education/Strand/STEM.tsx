import { IoIosArrowBack } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import DashboardHeader from "../../Dashboard/DashboardHeader";

export default function STEM() {
    const location = useLocation();
  const guest = (location.state as { user?: any } | undefined)?.user ?? null;
  
  const Grade11Modules = [
    
    {
      title: "Foundations of Biological Science",
      topics: [
        "Cell structure and function",
        "Photosynthesis & cellular respiration",
        "Genetics basics",
        "Scientific method and lab safety"
      ],
      outcomes: [
        "Conduct basic biology experiments and record observations",
        "Explain cell processes and heredity concepts"
      ],
      assessments: ["Lab practicals", "Short quizzes", "Research write-ups"]
    },
    {
      title: "Foundations of Physical Science",
      topics: [
        "Kinematics and basic mechanics",
        "Properties of matter & chemical reactions",
        "Energy, work, and simple machines",
        "Measurement and experimental design"
      ],
      outcomes: [
        "Solve basic physics and chemistry problems",
        "Design simple experiments and analyze results"
      ],
      assessments: ["Problem sets", "Lab reports", "Demonstrations"]
    },
    {
      title: "Mathematical Reasoning & Pre-Calculus",
      topics: [
        "Algebra review and functions",
        "Trigonometry fundamentals",
        "Sequences, series, and limits intro",
        "Graphing and modeling"
      ],
      outcomes: ["Apply algebra and trig to model problems", "Interpret and graph functions"],
      assessments: ["Problem sets", "Quizzes", "Graphing assignments"]
    },
    {
      title: "Introductory Engineering & Design",
      topics: [
        "Engineering design process",
        "Basic material properties",
        "Sketching and simple CAD concepts",
        "Build simple prototypes"
      ],
      outcomes: ["Follow design steps to create simple prototypes", "Document design choices"],
      assessments: ["Prototype build", "Design journal", "Peer demo"]
    },
    {
      title: "Technology & Computational Thinking",
      topics: [
        "Introduction to programming logic",
        "Data representation and digital systems",
        "Using scientific/graphing calculators",
        "Basic data collection and analysis"
      ],
      outcomes: ["Solve problems using computational thinking", "Collect and analyze simple datasets"],
      assessments: ["Mini coding tasks", "Data collection worksheet", "Practical demo"]
    }
  ];

  const Grade12Modules = [
    {
      title: "Advanced Biology & Research Methods",
      topics: [
        "Human physiology basics",
        "Ecosystems and environmental science",
        "Experimental design and statistics",
        "Research paper writing and ethics"
      ],
      outcomes: ["Plan and conduct a research investigation", "Write and present research findings"],
      assessments: ["Research project", "Statistics assignments", "Oral defense"]
    },
    {
      title: "Advanced Physics & Applied Mechanics",
      topics: [
        "Dynamics and energy systems",
        "Waves, optics, and electricity basics",
        "Statics and strength of materials intro",
        "Applied problem-solving with real examples"
      ],
      outcomes: ["Analyze physical systems and solve applied problems", "Perform experiments with instruments"],
      assessments: ["Lab experiments", "Problem-solving exams", "Practical demonstrations"]
    },
    {
      title: "Calculus & Mathematical Modeling",
      topics: [
        "Limits, derivatives and applications",
        "Integrals and area under curves",
        "Modeling growth/decay and optimization",
        "Using math software for computation"
      ],
      outcomes: ["Use calculus to model and solve problems", "Interpret mathematical models"],
      assessments: ["Problem sets", "Modeling project", "Timed quizzes"]
    },
    {
      title: "Engineering Systems & Project Management",
      topics: [
        "Systems thinking and subsystems",
        "Project planning, scheduling and resources",
        "Quality and testing basics",
        "Teamwork and technical communication"
      ],
      outcomes: ["Plan and execute a team engineering project", "Apply testing and iteration"],
      assessments: ["Group project", "Project plan & schedule", "Retrospective report"]
    },
    {
      title: "STEM Capstone & Career Preparation",
      topics: [
        "Capstone project development",
        "Portfolio and presentation skills",
        "Career pathways and college preparation",
        "Industry certifications overview"
      ],
      outcomes: ["Deliver a capstone with technical documentation", "Present work to peers/industry"],
      assessments: ["Capstone deliverable", "Portfolio review", "Mock interviews"]
    }
  ];

  const WhatYoullLearn = [
    "Scientific inquiry & experimental design",
    "Mathematical modeling and problem-solving",
    "Engineering design and prototyping",
    "Data analysis and scientific communication",
    "Teamwork, ethics, and professional skills"
  ];

  // const CareerPaths = [
  //   "Engineer (civil, mechanical, electrical)",
  //   "Medical & health professions (pre-med pathways)",
  //   "Research scientist",
  //   "Data scientist / analyst",
  //   "Architect",
  //   "STEM educator"
  // ];

  // const SampleSubjects = [
  //   "General Biology 1 & 2",
  //   "General Physics 1 & 2",
  //   "General Chemistry 1 & 2",
  //   "Pre-Calculus & Calculus",
  //   "Research 1 & 2 (Capstone)",
  //   "Introduction to Engineering"
  // ];

  const Projects = [
    {
      name: "Science Investigatory Project (SIP)",
      desc: "Design and run an experiment, analyze data, and write a research report."
    },
    {
      name: "Engineering Prototype",
      desc: "Build a functional model (bridge, mechanical device, simple machine) with documentation."
    },
    {
      name: "Mathematical Modeling Case Study",
      desc: "Use calculus or statistics to model a real-world problem and propose solutions."
    },
    {
      name: "Interdisciplinary Tech Project",
      desc: "Combine programming, sensors, and engineering to create an IoT or automation demo."
    }
  ];

  const Resources = [
    { name: "K to 12 DepEd Curriculum — Science & Math", href: "https://www.deped.gov.ph" },
    { name: "PhET Interactive Simulations", href: "https://phet.colorado.edu" },
    { name: "Khan Academy (Math & Science)", href: "https://www.khanacademy.org" },
    { name: "MIT OpenCourseWare (Intro STEM)", href: "https://ocw.mit.edu" }
  ];

  const FAQ = [
    {
      q: "Is STEM too hard?",
      a: "STEM is rigorous but rewarding. Success depends on consistent practice, asking questions, and using hands-on projects to learn."
    },
    {
      q: "Will STEM prepare me for medicine or engineering?",
      a: "Yes. STEM gives strong foundations for medical, engineering, and science degrees, but subject choices and higher education pathways matter too."
    },
    {
      q: "What evidence should I include in my capstone portfolio?",
      a: "Include project proposals, lab logs, code repos, design files, photos/videos of prototypes, data analysis, and a reflective report."
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-b from-white to-indigo-50 text-gray-900">
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
                  STEM — Senior High School (Grade 11 & 12)
                </h1>
                <p className="mt-2 text-gray-700">
                  DepEd-aligned STEM content emphasizing scientific inquiry, mathematics, engineering design, and research-focused capstones for Grade 11–12 learners.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <div className="px-4 py-2 bg-indigo-50 rounded-lg border border-indigo-100 text-sm text-indigo-700">Track: Academic — STEM</div>
                  <div className="px-4 py-2 bg-green-50 rounded-lg border border-green-100 text-sm text-green-700">Outcome: College-ready / Research-ready</div>
                  <div className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-100 text-sm text-gray-700">Duration: 2 years</div>
                </div>
              </div>

              <main className="mt-6 space-y-6">
                <section className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-900">What you'll learn</h2>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {WhatYoullLearn.map((s, i) => (
                      <div key={i} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 font-semibold">{i + 1}</span>
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
                        <p className="mt-2 text-sm text-gray-700"><strong>Learning outcomes:</strong> {m.outcomes?.join("; ")}</p>
                        <p className="mt-2 text-xs text-gray-500">Assessment: {m.assessments?.join(", ")}</p>
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
                        <p className="mt-2 text-sm text-gray-700"><strong>Learning outcomes:</strong> {m.outcomes?.join("; ")}</p>
                        <p className="mt-2 text-xs text-gray-500">Assessment: {m.assessments?.join(", ")}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-900">Capstone Guidance & Projects</h2>
                  <p className="mt-2 text-sm text-gray-700">
                    Capstone projects should demonstrate inquiry, technical skills, and communication. Include a project plan, data/evidence (logs, code, photos), technical report, and a presentation/demo.
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
                <p className="mt-2 text-sm text-gray-700">Track: STEM • Duration: 2 years • Mode: On-site / Blended</p>
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
                    <li key={i}><a className="text-indigo-600 hover:underline" href={r.href} target="_blank" rel="noreferrer">{r.name}</a></li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500">© STEM — Senior High School</div>
      </div>
    </div>
  );
}
