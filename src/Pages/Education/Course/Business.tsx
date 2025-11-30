import { IoIosArrowBack } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import DashboardHeader from "../../Dashboard/DashboardHeader";

const BusinessCourses = [
    {
        code: "ACC",
        title: "Accounting",
        topics: [
            "Financial reporting and analysis",
            "Auditing and assurance",
            "Cost accounting",
            "Taxation principles",
            "Accounting information systems"
        ],
        outcomes: [
            "Prepare and analyze financial statements",
            "Conduct audits and ensure compliance",
            "Manage financial records and budgets"
        ],
        assessments: ["Financial reports", "Auditing exercises", "Tax computations"],
        exampleJobs: ["Accountant", "Auditor", "Financial Analyst", "Tax Specialist"]
    },
    {
        code: "MKT",
        title: "Marketing",
        topics: [
            "Market research and analysis",
            "Branding and advertising",
            "Digital marketing and social media",
            "Consumer behavior",
            "Sales and promotional strategies"
        ],
        outcomes: [
            "Develop marketing campaigns",
            "Analyze market trends",
            "Manage branding and communication strategies"
        ],
        assessments: ["Marketing plans", "Market research reports", "Campaign presentations"],
        exampleJobs: ["Marketing Specialist", "Brand Manager", "Social Media Manager", "Market Research Analyst"]
    },
    {
        code: "FIN",
        title: "Finance",
        topics: [
            "Investment strategies",
            "Corporate finance",
            "Financial markets",
            "Risk management",
            "Portfolio analysis"
        ],
        outcomes: [
            "Evaluate financial performance",
            "Manage investments and portfolios",
            "Conduct financial forecasting"
        ],
        assessments: ["Investment analysis", "Financial models", "Risk assessments"],
        exampleJobs: ["Financial Analyst", "Investment Banker", "Risk Analyst", "Portfolio Manager"]
    },
    {
        code: "HRM",
        title: "Human Resource Management",
        topics: [
            "Recruitment and staffing",
            "Training and development",
            "Employee relations",
            "Performance management",
            "Compensation and benefits"
        ],
        outcomes: [
            "Implement HR strategies",
            "Manage employee development",
            "Resolve organizational conflicts"
        ],
        assessments: ["HR case studies", "Training program design", "Employee evaluations"],
        exampleJobs: ["HR Officer", "Recruitment Specialist", "Training Coordinator", "Compensation Analyst"]
    },
    {
        code: "BA",
        title: "Business Administration",
        topics: [
            "Management principles",
            "Business planning",
            "Organizational behavior",
            "Operations management",
            "Strategic decision-making"
        ],
        outcomes: [
            "Manage business operations",
            "Develop strategic plans",
            "Lead teams and departments"
        ],
        assessments: ["Business plans", "Management reports", "Case studies"],
        exampleJobs: ["Business Manager", "Operations Supervisor", "Administrative Officer", "Project Coordinator"]
    },
    {
        code: "ENT",
        title: "Entrepreneurship",
        topics: [
            "Business startup planning",
            "Innovation and product development",
            "Venture financing",
            "Business pitching",
            "Small business management"
        ],
        outcomes: [
            "Create business models",
            "Develop new ventures",
            "Pitch ideas to investors"
        ],
        assessments: ["Startup pitch decks", "Business models", "Prototype demos"],
        exampleJobs: ["Entrepreneur", "Startup Founder", "Business Consultant", "Product Developer"]
    },
    {
        code: "IB",
        title: "International Business",
        topics: [
            "Global trade and economics",
            "Cross-cultural communication",
            "International marketing",
            "Global supply chains",
            "International finance"
        ],
        outcomes: [
            "Analyze global markets",
            "Build international business strategies",
            "Manage multinational operations"
        ],
        assessments: ["Global market reports", "Cross-cultural analyses", "Trade case studies"],
        exampleJobs: ["International Trade Specialist", "Global Marketing Manager", "Export Manager", "Business Analyst"]
    },
    {
        code: "SCM",
        title: "Supply Chain Management",
        topics: [
            "Logistics and distribution",
            "Procurement and sourcing",
            "Inventory management",
            "Operations planning",
            "Supply chain technology"
        ],
        outcomes: [
            "Optimize supply chain processes",
            "Manage procurement and logistics",
            "Improve operational efficiency"
        ],
        assessments: ["Logistics plans", "Procurement cases", "Process optimization projects"],
        exampleJobs: ["Supply Chain Analyst", "Logistics Coordinator", "Procurement Officer", "Operations Planner"]
    }
];

export default function Business() {
    const location = useLocation();
    const guest = (location.state as { user?: any } | undefined)?.user ?? null;

    return (
        <div className="min-h-screen bg-linear-to-b from-white to-yellow-50 text-gray-900">
            <DashboardHeader guest={guest} />
            <div className="max-w-6xl mx-auto px-6 py-10">
                <div className="flex items-center gap-4 mb-6">
                    <Link to="/Dashboard" className="flex items-center gap-2 text-gray-700 hover:text-gray-900">
                        <IoIosArrowBack size={20} />
                        <span className="text-sm">Back to Courses</span>
                    </Link>
                </div>

                <div className="rounded-2xl bg-white/60 backdrop-blur-md border border-white/60 p-8 shadow-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <header className="lg:col-span-2">
                            <div className="rounded-xl bg-white/80 p-6 border border-white/70 shadow-sm">
                                <h1 className="text-3xl font-extrabold chewy-regular text-gray-900">Business Programs & Career Examples</h1>
                                <p className="mt-2 text-gray-700">Overview of core business fields with topics, outcomes, assessments, and real-world job examples for each specialization.</p>
                                <div className="mt-5 flex flex-wrap gap-3">
                                    <div className="px-4 py-2 bg-yellow-50 rounded-lg border border-yellow-100 text-sm text-yellow-700">Track: Business</div>
                                    <div className="px-4 py-2 bg-green-50 rounded-lg border border-green-100 text-sm text-green-700">Outcome: Industry-ready</div>
                                    <div className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-100 text-sm text-gray-700">Duration: 4 years</div>
                                </div>
                            </div>

                            <main className="mt-6 space-y-6">
                                <section className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm">
                                    <h2 className="text-xl font-semibold text-gray-900">Business Course Summaries</h2>
                                    <p className="mt-2 text-sm text-gray-700">Each card lists focus topics, expected learning outcomes, assessment styles, and sample job roles.</p>

                                    <div className="mt-4 grid gap-4">
                                        {BusinessCourses.map((c, i) => (
                                            <div key={i} className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                                                <div className="flex items-start justify-between">
                                                    <div>
                                                        <h3 className="font-semibold text-gray-900">{c.code} — {c.title}</h3>
                                                        <p className="mt-1 text-sm text-gray-600">{c.topics.slice(0, 3).join(" • ")}{c.topics.length > 3 ? " • …" : ""}</p>
                                                    </div>
                                                    <span className="text-xs text-gray-500">{c.topics.length} topics</span>
                                                </div>
                                                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                                                    <div>
                                                        <h4 className="text-sm font-medium text-gray-800">Key Topics</h4>
                                                        <ul className="list-disc list-inside mt-2 text-sm text-gray-700 space-y-1">
                                                            {c.topics.map((t, idx) => <li key={idx}>{t}</li>)}
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-sm font-medium text-gray-800">Outcomes, Assessments & Jobs</h4>
                                                        <p className="mt-2 text-sm text-gray-700"><strong>Outcomes:</strong> {c.outcomes.join('; ')}</p>
                                                        <p className="mt-2 text-xs text-gray-500">Assessments: {c.assessments.join(', ')}</p>
                                                        <p className="mt-2 text-sm text-gray-700"><strong>Example jobs:</strong> {c.exampleJobs.join(', ')}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm">
                                    <h2 className="text-xl font-semibold text-gray-900">Career Paths in Business</h2>
                                    <p className="mt-2 text-sm text-gray-700">Graduates work in finance, management, marketing, HR, logistics, consulting, and global trade. Employers value communication, business analysis, teamwork, and leadership skills.</p>
                                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                                            <h4 className="font-semibold text-gray-900">Skills Employers Want</h4>
                                            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                                                <li>Business planning and analysis</li>
                                                <li>Communication and presentation</li>
                                                <li>Team leadership and management</li>
                                                <li>Financial literacy</li>
                                                <li>Decision-making and critical thinking</li>
                                            </ul>
                                        </div>
                                        <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                                            <h4 className="font-semibold text-gray-900">Certifications & Extras</h4>
                                            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                                                <li>Project Management (PMI, CAPM)</li>
                                                <li>Financial certifications (CPA, CFA basics)</li>
                                                <li>Digital Marketing certificates</li>
                                                <li>Logistics certifications (Lean Six Sigma, CPIM)</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                <section className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm">
                                    <h2 className="text-xl font-semibold text-gray-900">Choosing a Business Program</h2>
                                    <p className="mt-2 text-sm text-gray-700">Select based on your interest in finance, marketing, HR, global trade, administration, or entrepreneurship. Consider internship options, accreditation, and department partnerships with industry.</p>
                                    <div className="mt-3 grid gap-3 sm:grid-cols-3">
                                        <div className="p-3 rounded-lg bg-yellow-50 border border-yellow-100 text-sm text-yellow-700">Industry internships</div>
                                        <div className="p-3 rounded-lg bg-green-50 border border-green-100 text-sm text-green-700">Business competitions</div>
                                        <div className="p-3 rounded-lg bg-gray-50 border border-gray-100 text-sm text-gray-700">Training & certification tracks</div>
                                    </div>
                                </section>
                            </main>
                        </header>

                        <aside className="sticky top-8 space-y-4">
                            <div className="rounded-xl bg-white/90 backdrop-blur-sm p-5 border border-gray-200 shadow">
                                <h3 className="text-lg font-semibold text-gray-900">Quick Info</h3>
                                <p className="mt-2 text-sm text-gray-700">Entry: Senior high graduates • Mode: On-site / Blended • Duration: 4 years</p>
                                <div className="mt-4 grid grid-cols-2 gap-2">
                                    <a className="px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 text-center hover:bg-gray-50" href="#contact">Contact</a>
                                    <a className="px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 text-center hover:bg-gray-50" href="#admissions">Admissions</a>
                                </div>
                            </div>

                            <div className="rounded-xl bg-white/90 backdrop-blur-sm p-5 border border-gray-200 shadow">
                                <h4 className="font-semibold text-gray-900">FAQ</h4>
                                <div className="mt-3 space-y-2 text-sm text-gray-700">
                                    <details className="group bg-gray-50 rounded-lg p-2">
                                        <summary className="cursor-pointer font-medium list-none">Which business track is best for management?</summary>
                                        <p className="mt-2 text-sm text-gray-700">Business Administration and HRM strongly emphasize management and organizational leadership.</p>
                                    </details>

                                    <details className="group bg-gray-50 rounded-lg p-2">
                                        <summary className="cursor-pointer font-medium list-none">Is business good for starting a company?</summary>
                                        <p className="mt-2 text-sm text-gray-700">Entrepreneurship provides strong foundations in startup creation, innovation, and pitching.</p>
                                    </details>
                                </div>
                            </div>

                            <div className="rounded-xl bg-white/90 backdrop-blur-sm p-5 border border-gray-200 shadow">
                                <h4 className="font-semibold text-gray-900">Resources</h4>
                                <ul className="mt-3 text-sm text-gray-700 space-y-2">
                                    <li><a className="text-blue-600 hover:underline" href="https://www.investopedia.com" target="_blank" rel="noreferrer">Investopedia</a></li>
                                    <li><a className="text-blue-600 hover:underline" href="https://www.coursera.org" target="_blank" rel="noreferrer">Coursera Business Courses</a></li>
                                    <li><a className="text-blue-600 hover:underline" href="https://www.pmi.org" target="_blank" rel="noreferrer">PMI Project Management</a></li>
                                    <li><a className="text-blue-600 hover:underline" href="https://www.hubspot.com" target="_blank" rel="noreferrer">HubSpot Marketing Academy</a></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>

                <div className="mt-6 text-center text-xs text-gray-500">
                    Data sourced from industry standards and academic curricula as of 2024.
                </div>
            </div>
        </div>
    );
}