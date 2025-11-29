import { IoIosArrowBack } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import DashboardHeader from "../../Dashboard/DashboardHeader";

export default function GAS() {
    const location = useLocation();
  const guest = (location.state as { user?: any } | undefined)?.user ?? null;
  
  const Grade11Modules = [
    {
      title: "Intro to Humanities & Society",
      topics: [
        "Foundations of philosophy and ethics",
        "Basic sociology concepts",
        "Cultural diversity and identity",
        "Critical reading of texts"
      ],
      outcomes: [
        "Analyze social and cultural phenomena",
        "Apply ethical reasoning to real issues"
      ],
      assessments: ["Short essays", "Class discussions", "Reflection journals"]
    },
    {
      title: "Communication & Media Literacy",
      topics: [
        "Effective oral communication",
        "Writing for different audiences",
        "Media analysis and credibility",
        "Presentation skills"
      ],
      outcomes: [
        "Compose clear written and oral messages",
        "Evaluate media sources for credibility"
      ],
      assessments: ["Presentations", "Media critiques", "Written assignments"]
    },
    {
      title: "Applied Economics & Entrepreneurship Basics",
      topics: [
        "Supply & demand in everyday life",
        "Personal finance basics",
        "Micro-enterprise concepts",
        "Simple market research"
      ],
      outcomes: ["Apply basic economic reasoning", "Draft simple business ideas"],
      assessments: ["Case studies", "Mini business plan", "Quizzes"]
    },
    {
      title: "Research Foundations",
      topics: [
        "Research questions and methods",
        "Qualitative vs quantitative approaches",
        "Data collection basics",
        "Citation and academic integrity"
      ],
      outcomes: ["Design a small research inquiry", "Collect and present simple data"],
      assessments: ["Research proposals", "Field notes", "Mini reports"]
    }
  ];

  const Grade12Modules = [
    {
      title: "Advanced Social Sciences & Policy",
      topics: [
        "Public policy basics",
        "Community development",
        "Comparative social systems",
        "Ethics in governance"
      ],
      outcomes: ["Assess policy implications", "Participate in community planning"],
      assessments: ["Policy briefs", "Group projects", "Community reports"]
    },
    {
      title: "Creative & Professional Writing",
      topics: [
        "Academic essay and research writing",
        "Creative non-fiction and storytelling",
        "Technical writing basics",
        "Portfolio compilation"
      ],
      outcomes: ["Produce publishable-quality written work", "Compile a professional portfolio"],
      assessments: ["Extended writing project", "Portfolio submission", "Peer review"]
    },
    {
      title: "Media Production & Digital Communication",
      topics: [
        "Audio/video basics and storytelling",
        "Podcasting and vlogging fundamentals",
        "Social media strategy and ethics",
        "Basic multimedia editing"
      ],
      outcomes: ["Create multimedia pieces and campaigns", "Apply ethical standards in media"],
      assessments: ["Multimedia project", "Campaign pitch", "Practical demo"]
    },
    {
      title: "Capstone: Interdisciplinary Research or Applied Project",
      topics: [
        "Project planning and methodology",
        "Stakeholder engagement and community liaison",
        "Data synthesis and reporting",
        "Presentation and dissemination"
      ],
      outcomes: ["Deliver an interdisciplinary capstone with evidence and reflection"],
      assessments: ["Capstone deliverable", "Oral defense", "Documentation & portfolio"]
    }
  ];

  const WhatYoullLearn = [
    "Critical thinking and textual analysis",
    "Clear professional communication",
    "Research design and evidence use",
    "Media literacy and ethical responsibility",
    "Foundations of entrepreneurship and civic engagement"
  ];

  // const CareerPaths = [
  //   "Teacher / Educator",
  //   "Journalist / Media Producer",
  //   "Public Relations / Communications Officer",
  //   "Social Worker / Community Organizer",
  //   "Policy Analyst / Research Assistant",
  //   "Business / Office Administration"
  // ];

  const Projects = [
    {
      name: "Community Research Project",
      desc: "Investigate a local social issue, collect data, and propose practical interventions with a report."
    },
    {
      name: "Multimedia Storytelling Piece",
      desc: "Produce a short documentary or podcast episode highlighting a community topic."
    },
    {
      name: "Mini-Enterprise & Marketing Plan",
      desc: "Create and pilot a micro-venture with simple marketing and financial records."
    },
    {
      name: "Position Paper & Public Forum",
      desc: "Research a policy issue, write a position paper, and present in a moderated forum."
    }
  ];

  const Resources = [
    { name: "DepEd K–12 Curriculum (Humanities & Social Sciences)", href: "https://www.deped.gov.ph" },
    { name: "Purdue OWL — Writing Resources", href: "https://owl.purdue.edu" },
    { name: "The Conversation — Academic Articles", href: "https://theconversation.com" },
    { name: "UN Data & Statistics", href: "https://data.un.org" }
  ];

  const FAQ = [
    {
      q: "Is GAS for students who are undecided?",
      a: "Yes. GAS is ideal for learners who want a broad, flexible curriculum spanning humanities, social sciences, communication, and basic business."
    },
    {
      q: "Can GAS prepare me for college?",
      a: "Absolutely. GAS provides strong foundations for degrees in education, social sciences, communication, business, and law."
    },
    {
      q: "What should my capstone show?",
      a: "Your capstone should demonstrate research ability, evidence-based recommendations, clear communication, and reflection on impact or learning."
    }
  ];

  return (
    
    <div className="min-h-screen bg-linear-to-b from-white to-amber-50 text-gray-900">
        <DashboardHeader guest={guest} />


      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center gap-4 mb-6">
          <Link to="/Strand" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
            <IoIosArrowBack size={20} />
            <span className="text-sm">Back to Strands</span>
          </Link>
        </div>

        <div className="rounded-2xl bg-white/70 backdrop-blur-md border border-white/60 p-8 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <header className="lg:col-span-2">
              <div className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm">
                <h1 className="text-3xl font-extrabold chewy-regular text-gray-900">GAS — General Academic Strand (Grade 11 & 12)</h1>
                <p className="mt-2 text-gray-700">
                  A flexible strand designed for learners who want interdisciplinary knowledge across humanities, social sciences, communication, and basic business.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <div className="px-4 py-2 bg-amber-50 rounded-lg border border-amber-100 text-sm text-amber-700">Track: Academic — GAS</div>
                  <div className="px-4 py-2 bg-green-50 rounded-lg border border-green-100 text-sm text-green-700">Outcome: College-ready / Broad skills</div>
                  <div className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-100 text-sm text-gray-700">Duration: 2 years</div>
                </div>
              </div>

              <main className="mt-6 space-y-6">
                <section className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm">
                  <h2 className="text-xl font-semibold text-gray-900">What you'll learn</h2>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {WhatYoullLearn.map((s, i) => (
                      <div key={i} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg border border-gray-100">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-700 font-semibold">{i + 1}</span>
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
                  <p className="mt-2 text-sm text-gray-700">Capstones should showcase research, communication, and applied solutions. Include planning documents, evidence, a written report, and an oral presentation or public forum.</p>
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
                <p className="mt-2 text-sm text-gray-700">Track: GAS • Duration: 2 years • Mode: On-site / Blended</p>
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
                    <li key={i}><a className="text-amber-700 hover:underline" href={r.href} target="_blank" rel="noreferrer">{r.name}</a></li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500">© GAS — Senior High School</div>
      </div>
    </div>
  );
}
