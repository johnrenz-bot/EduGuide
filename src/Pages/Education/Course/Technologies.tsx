import { IoIosArrowBack } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import DashboardHeader from "../../Dashboard/DashboardHeader";

const Courses = [
    {
        code: "BSIT",
        title: "Bachelor of Science in Information Technology",
        topics: [
            "Networking and system administration",
            "Database design and management",
            "Information security fundamentals",
            "Systems integration and IT support",
            "Web and application development"
        ],
        outcomes: [
            "Manage and maintain enterprise IT systems",
            "Implement basic security and backup strategies",
            "Deploy web and database-backed applications"
        ],
        assessments: ["Practical labs", "Configured systems", "Project deliverables"]
    },
    {
        code: "BSCS",
        title: "Bachelor of Science in Computer Science",
        topics: [
            "Algorithms and data structures",
            "Programming languages and paradigms",
            "Operating systems and compilers",
            "Artificial intelligence and theory of computation",
            "Software engineering principles"
        ],
        outcomes: [
            "Design efficient algorithms",
            "Build scalable software",
            "Apply theoretical foundations to real-world problems"
        ],
        assessments: ["Coding assignments", "Algorithmic challenges", "Research/project work"]
    },
    {
        code: "BSCpE",
        title: "Bachelor of Science in Computer Engineering",
        topics: [
            "Digital logic and circuits",
            "Microprocessors and embedded systems",
            "Computer architecture",
            "Hardware-software co-design",
            "Electronics and signal processing"
        ],
        outcomes: [
            "Design digital hardware and embedded solutions",
            "Integrate hardware with low-level software",
            "Work on IoT and robotics systems"
        ],
        assessments: ["Lab deliverables", "Hardware prototypes", "Embedded projects"]
    },
    {
        code: "BSIS",
        title: "Bachelor of Science in Information Systems",
        topics: [
            "Systems analysis and design",
            "Enterprise applications",
            "Business processes and IT alignment",
            "Database systems and reporting",
            "IT governance and project management"
        ],
        outcomes: [
            "Analyze and model business requirements",
            "Deliver enterprise software solutions",
            "Lead IT projects and implementations"
        ],
        assessments: ["Case studies", "System design docs", "Project demos"]
    },
    {
        code: "BSSE",
        title: "Bachelor of Science in Software Engineering",
        topics: [
            "Software architecture and design patterns",
            "Testing and quality assurance",
            "DevOps and CI/CD practices",
            "Requirement engineering",
            "Large-scale system development"
        ],
        outcomes: [
            "Apply engineering processes to software delivery",
            "Ensure software quality at scale",
            "Automate build and deployment pipelines"
        ],
        assessments: ["Team projects", "Test suites", "Deployment demos"]
    },
    {
        code: "CYBER",
        title: "Bachelor of Science in Cybersecurity",
        topics: [
            "Network security and hardening",
            "Ethical hacking and penetration testing",
            "Digital forensics and incident response",
            "Cryptography basics",
            "Risk assessment and compliance"
        ],
        outcomes: [
            "Detect and respond to security incidents",
            "Perform vulnerability assessments",
            "Implement layered security controls"
        ],
        assessments: ["Penetration test reports", "Forensics exercises", "Security audits"]
    },
    {
        code: "DS",
        title: "Bachelor of Science in Data Science",
        topics: [
            "Statistical analysis and inference",
            "Machine learning and predictive modeling",
            "Data engineering and pipelines",
            "Big data tools and distributed computing",
            "Data visualization and communication"
        ],
        outcomes: [
            "Build and evaluate predictive models",
            "Prepare and process large datasets",
            "Communicate insights to stakeholders"
        ],
        assessments: ["Data projects", "Model evaluation reports", "Dashboards"]
    },
    {
        code: "AI",
        title: "Bachelor of Science in Artificial Intelligence",
        topics: [
            "Neural networks and deep learning",
            "Natural language processing",
            "Computer vision",
            "Reinforcement learning",
            "AI ethics and deployment"
        ],
        outcomes: [
            "Design and train AI models",
            "Apply AI to practical domains",
            "Understand ethical implications of AI"
        ],
        assessments: ["Model implementations", "Research projects", "Case studies"]
    },
    {
        code: "NET",
        title: "Network Engineering & Administration",
        topics: [
            "LAN/WAN design and implementation",
            "Routing and switching",
            "Network security and firewalls",
            "Cloud networking and SDN",
            "Troubleshooting and monitoring"
        ],
        outcomes: [
            "Design and operate resilient networks",
            "Secure and monitor networked environments",
            "Integrate on-prem and cloud networking"
        ],
        assessments: ["Network builds", "Configuration logs", "Troubleshooting labs"]
    },
    {
        code: "WEB",
        title: "Web Development & Full-Stack",
        topics: [
            "HTML, CSS, JavaScript fundamentals",
            "Front-end frameworks and tooling",
            "Back-end APIs and databases",
            "Authentication and security",
            "Deployment and hosting"
        ],
        outcomes: [
            "Build responsive user interfaces",
            "Develop RESTful APIs and databases",
            "Deploy full-stack applications"
        ],
        assessments: ["Web projects", "Peer reviews", "Deployed apps"]
    },
    {
        code: "CLOUD",
        title: "Cloud Computing & DevOps",
        topics: [
            "Cloud platforms and services",
            "Containers and orchestration",
            "Infrastructure as Code",
            "CI/CD and automation",
            "Monitoring and reliability"
        ],
        outcomes: [
            "Deploy and manage cloud-native applications",
            "Automate infrastructure provisioning",
            "Ensure service reliability and observability"
        ],
        assessments: ["Deployed stacks", "Pipeline demos", "IaC repos"]
    },
    {
        code: "MOBILE",
        title: "Mobile Application Development",
        topics: [
            "Native Android and iOS development",
            "Cross-platform frameworks",
            "Mobile UX patterns",
            "Performance and debugging",
            "App store deployment"
        ],
        outcomes: [
            "Create performant mobile apps",
            "Design mobile-first experiences",
            "Publish apps to stores"
        ],
        assessments: ["App demos", "Store-ready builds", "User testing"]
    },
    {
        code: "GAME",
        title: "Game Development & Interactive Media",
        topics: [
            "Game engines and scripting",
            "Graphics and physics programming",
            "Level design and storytelling",
            "Multiplayer basics",
            "Performance optimization"
        ],
        outcomes: [
            "Build playable game prototypes",
            "Implement interactive mechanics",
            "Optimize for multiple platforms"
        ],
        assessments: ["Playable builds", "Design documents", "Playtesting feedback"]
    },
    {
        code: "MM",
        title: "Multimedia, Animation & VFX",
        topics: [
            "2D/3D modelling and animation",
            "Video production and editing",
            "Motion graphics and visual effects",
            "Audio production fundamentals",
            "Interactive media design"
        ],
        outcomes: [
            "Produce polished multimedia content",
            "Combine animation and VFX into projects",
            "Create portfolios for creative roles"
        ],
        assessments: ["Showreels", "Project deliverables", "Peer critiques"]
    }
];

export default function Technologies() {
    const location = useLocation();
    const guest = (location.state as { user?: any } | undefined)?.user ?? null;

    return (
        <div className="min-h-screen bg-linear-to-b from-white to-blue-50 text-gray-900">
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
                                <h1 className="text-3xl font-extrabold chewy-regular text-gray-900">Technology & Computing Programs</h1>
                                <p className="mt-2 text-gray-700">Comprehensive overview of undergraduate technology programs, career outcomes, and sample curriculum topics.</p>
                                <div className="mt-5 flex flex-wrap gap-3">
                                    <div className="px-4 py-2 bg-blue-50 rounded-lg border border-blue-100 text-sm text-blue-700">Track: Technology & Computing</div>
                                    <div className="px-4 py-2 bg-green-50 rounded-lg border border-green-100 text-sm text-green-700">Outcome: Industry-ready / Further studies</div>
                                    <div className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-100 text-sm text-gray-700">Duration: 4 years (typical)</div>
                                </div>
                            </div>

                            <main className="mt-6 space-y-6">
                                <section className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm">
                                    <h2 className="text-xl font-semibold text-gray-900">Undergraduate Degree Summaries</h2>
                                    <p className="mt-2 text-sm text-gray-700">Descriptions below list typical focus areas, sample topics, learning outcomes, and common assessment types for each program.</p>

                                    <div className="mt-4 grid gap-4">
                                        {Courses.map((c, i) => (
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
                                                        <h4 className="text-sm font-medium text-gray-800">Outcomes & Assessments</h4>
                                                        <p className="mt-2 text-sm text-gray-700"><strong>Outcomes:</strong> {c.outcomes.join("; ")}</p>
                                                        <p className="mt-2 text-xs text-gray-500">Assessments: {c.assessments.join(", ")}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                <section className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm">
                                    <h2 className="text-xl font-semibold text-gray-900">Career Paths & Industry Roles</h2>
                                    <p className="mt-2 text-sm text-gray-700">Graduates find roles such as Software Developer, Systems Administrator, Network Engineer, Data Scientist, DevOps Engineer, Cybersecurity Analyst, AI Engineer, Mobile Developer, Game Developer, and Multimedia Artist.</p>
                                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                                            <h4 className="font-semibold text-gray-900">Skills Employers Look For</h4>
                                            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                                                <li>Problem solving and algorithms</li>
                                                <li>Practical project experience and portfolios</li>
                                                <li>Version control and teamwork</li>
                                                <li>Cloud and container knowledge</li>
                                                <li>Security-aware development</li>
                                            </ul>
                                        </div>
                                        <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                                            <h4 className="font-semibold text-gray-900">Certifications & Extras</h4>
                                            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                                                <li>CompTIA A+, Network+, Security+</li>
                                                <li>Cloud: AWS, Azure, Google Cloud fundamentals</li>
                                                <li>Vendor certs: Cisco CCNA, Certified Ethical Hacker</li>
                                                <li>Data/ML: TensorFlow, ML certifications</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                <section className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm">
                                    <h2 className="text-xl font-semibold text-gray-900">Guidance for Choosing a Program</h2>
                                    <p className="mt-2 text-sm text-gray-700">Consider whether you prefer hardware-focused work (BSCpE), theory and algorithms (BSCS), applied IT and systems (BSIT/BSIS), or specialized domains like data science and cybersecurity. Look at lab facilities, internship partners, and elective choices.</p>
                                    <div className="mt-3 grid gap-3 sm:grid-cols-3">
                                        <div className="p-3 rounded-lg bg-blue-50 border border-blue-100 text-sm text-blue-700">Hands-on labs</div>
                                        <div className="p-3 rounded-lg bg-green-50 border border-green-100 text-sm text-green-700">Industry internships</div>
                                        <div className="p-3 rounded-lg bg-gray-50 border border-gray-100 text-sm text-gray-700">Research & electives</div>
                                    </div>
                                </section>
                            </main>
                        </header>

                        <aside className="sticky top-8 space-y-4">
                            <div className="rounded-xl bg-white/90 backdrop-blur-sm p-5 border border-gray-200 shadow">
                                <h3 className="text-lg font-semibold text-gray-900">Quick Info</h3>
                                <p className="mt-2 text-sm text-gray-700">Typical entry: Senior high graduates • Mode: On-site / Blended • Duration: 4 years</p>
                                <div className="mt-4 grid grid-cols-2 gap-2">
                                    <a className="px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 text-center hover:bg-gray-50" href="#contact">Contact</a>
                                    <a className="px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 text-center hover:bg-gray-50" href="#admissions">Admissions</a>
                                </div>
                            </div>

                            <div className="rounded-xl bg-white/90 backdrop-blur-sm p-5 border border-gray-200 shadow">
                                <h4 className="font-semibold text-gray-900">FAQ</h4>
                                <div className="mt-3 space-y-2 text-sm text-gray-700">
                                    <details className="group bg-gray-50 rounded-lg p-2">
                                        <summary className="cursor-pointer font-medium list-none">Which program is best for programming?</summary>
                                        <p className="mt-2 text-sm text-gray-700">BSCS and BSSE emphasize programming and software design; BSIT covers applied development too.</p>
                                    </details>

                                    <details className="group bg-gray-50 rounded-lg p-2">
                                        <summary className="cursor-pointer font-medium list-none">Can I switch tracks later?</summary>
                                        <p className="mt-2 text-sm text-gray-700">Many programs allow elective choices and minor specializations; consult your registrar for credit transfer options.</p>
                                    </details>
                                </div>
                            </div>

                            <div className="rounded-xl bg-white/90 backdrop-blur-sm p-5 border border-gray-200 shadow">
                                <h4 className="font-semibold text-gray-900">Resources</h4>
                                <ul className="mt-3 text-sm text-gray-700 space-y-2">
                                    <li><a className="text-blue-600 hover:underline" href="https://developer.mozilla.org" target="_blank" rel="noreferrer">MDN Web Docs</a></li>
                                    <li><a className="text-blue-600 hover:underline" href="https://www.freecodecamp.org" target="_blank" rel="noreferrer">freeCodeCamp</a></li>
                                    <li><a className="text-blue-600 hover:underline" href="https://www.coursera.org" target="_blank" rel="noreferrer">Coursera</a></li>
                                    <li><a className="text-blue-600 hover:underline" href="https://www.comptia.org" target="_blank" rel="noreferrer">CompTIA</a></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>

                <div className="mt-6 text-center text-xs text-gray-500">© Technology Programs — University / Institute</div>
            </div>
        </div>
    );
}
