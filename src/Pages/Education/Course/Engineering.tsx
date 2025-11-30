import { IoIosArrowBack } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import DashboardHeader from "../../Dashboard/DashboardHeader";

const EngineeringCourses = [
    {
        code: "CE",
        title: "Civil Engineering",
        topics: [
            "Structural design and analysis",
            "Geotechnical engineering and soil mechanics",
            "Transportation engineering and road design",
            "Construction management and materials",
            "Hydraulics and water resources"
        ],
        outcomes: [
            "Design safe and economical structures",
            "Perform site investigations and foundation design",
            "Plan and manage construction projects"
        ],
        assessments: ["Design reports", "Site investigations", "Construction project deliverables"],
        exampleJobs: ["Structural Engineer", "Geotechnical Engineer", "Construction Manager", "Transportation Planner"]
    },
    {
        code: "ME",
        title: "Mechanical Engineering",
        topics: [
            "Thermodynamics and heat transfer",
            "Fluid mechanics and machine design",
            "Manufacturing processes and CAD/CAM",
            "Dynamics and control systems",
            "Materials science"
        ],
        outcomes: [
            "Design mechanical systems and components",
            "Analyze thermal and fluid systems",
            "Develop manufacturable products"
        ],
        assessments: ["CAD models", "Prototype testing", "Thermal/fluid analysis reports"],
        exampleJobs: ["Mechanical Design Engineer", "R&D Engineer", "Maintenance Engineer", "HVAC Engineer"]
    },
    {
        code: "EE",
        title: "Electrical Engineering",
        topics: [
            "Circuit analysis and electronics",
            "Power systems and transmission",
            "Control systems and instrumentation",
            "Signal processing and communications",
            "Embedded systems"
        ],
        outcomes: [
            "Design and analyze electrical circuits",
            "Work on power generation and distribution",
            "Develop control and embedded solutions"
        ],
        assessments: ["Circuit labs", "Power system studies", "Embedded prototypes"],
        exampleJobs: ["Power Systems Engineer", "Electronics Engineer", "Controls Engineer", "Hardware Engineer"]
    },
    {
        code: "CpE",
        title: "Computer Engineering",
        topics: [
            "Digital logic and microprocessors",
            "Computer architecture and VLSI",
            "Embedded systems and firmware",
            "FPGA design and hardware-software co-design",
            "Peripheral interfacing and IoT"
        ],
        outcomes: [
            "Design digital and embedded hardware",
            "Integrate hardware with low-level software",
            "Build reliable IoT systems"
        ],
        assessments: ["FPGA/board prototypes", "Firmware projects", "Architecture reports"],
        exampleJobs: ["Embedded Systems Engineer", "FPGA Engineer", "IoT Developer", "Hardware-Software Integrator"]
    },
    {
        code: "ChE",
        title: "Chemical Engineering",
        topics: [
            "Process engineering and unit operations",
            "Reaction engineering and catalysis",
            "Process control and safety",
            "Separation processes and thermodynamics",
            "Materials & polymer engineering"
        ],
        outcomes: [
            "Design chemical processes and plants",
            "Optimize production and ensure safety",
            "Scale lab processes to industry"
        ],
        assessments: ["Process simulations", "Pilot plant reports", "Safety analyses"],
        exampleJobs: ["Process Engineer", "Plant Engineer", "Formulation Scientist", "Safety Engineer"]
    },
    {
        code: "AE",
        title: "Aerospace Engineering",
        topics: [
            "Aerodynamics and flight mechanics",
            "Propulsion systems",
            "Structures and materials for aircraft/spacecraft",
            "Avionics and control",
            "Systems integration and testing"
        ],
        outcomes: [
            "Design and analyze air/space vehicles",
            "Develop propulsion and guidance systems",
            "Perform structural and systems testing"
        ],
        assessments: ["Flight dynamics simulations", "Wind tunnel/CFD reports", "Avionics prototypes"],
        exampleJobs: ["Aerospace Engineer", "Flight Systems Engineer", "Propulsion Engineer", "Structures Analyst"]
    },
    {
        code: "EnvE",
        title: "Environmental Engineering",
        topics: [
            "Water and wastewater treatment",
            "Air quality and pollution control",
            "Environmental impact assessment",
            "Sustainable design and remediation",
            "Solid waste management"
        ],
        outcomes: [
            "Design treatment systems",
            "Assess and mitigate environmental impacts",
            "Implement sustainable engineering solutions"
        ],
        assessments: ["Treatment plant design", "Impact assessments", "Remediation plans"],
        exampleJobs: ["Environmental Engineer", "Water Resources Engineer", "Sustainability Consultant", "Remediation Specialist"]
    },
    {
        code: "IE",
        title: "Industrial Engineering",
        topics: [
            "Operations research and optimization",
            "Production planning and supply chains",
            "Human factors and ergonomics",
            "Quality engineering and Six Sigma",
            "Systems engineering and process improvement"
        ],
        outcomes: [
            "Optimize complex systems and workflows",
            "Improve productivity and reduce waste",
            "Implement quality and reliability programs"
        ],
        assessments: ["Process improvement projects", "Simulation models", "Quality audits"],
        exampleJobs: ["Process Engineer", "Supply Chain Analyst", "Quality Engineer", "Operations Manager"]
    }
];

export default function Engineering() {
    const location = useLocation();
    const guest = (location.state as { user?: any } | undefined)?.user ?? null;

    return (
        <div className="min-h-screen bg-linear-to-b from-white to-green-50 text-gray-900">
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
                                <h1 className="text-3xl font-extrabold chewy-regular text-gray-900">Engineering Programs & Career Examples</h1>
                                <p className="mt-2 text-gray-700">Overview of core engineering disciplines with practical topics, learning outcomes, assessment types, and real-world job examples for each course.</p>
                                <div className="mt-5 flex flex-wrap gap-3">
                                    <div className="px-4 py-2 bg-blue-50 rounded-lg border border-blue-100 text-sm text-blue-700">Track: Engineering</div>
                                    <div className="px-4 py-2 bg-green-50 rounded-lg border border-green-100 text-sm text-green-700">Outcome: Industry-ready / Professional practice</div>
                                    <div className="px-4 py-2 bg-gray-50 rounded-lg border border-gray-100 text-sm text-gray-700">Typical duration: 4 years</div>
                                </div>
                            </div>

                            <main className="mt-6 space-y-6">
                                <section className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm">
                                    <h2 className="text-xl font-semibold text-gray-900">Undergraduate Engineering Summaries</h2>
                                    <p className="mt-2 text-sm text-gray-700">Each card lists key topics, expected learning outcomes, common assessment types, and concrete job roles graduates commonly pursue.</p>

                                    <div className="mt-4 grid gap-4">
                                        {EngineeringCourses.map((c, i) => (
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
                                    <h2 className="text-xl font-semibold text-gray-900">Career Paths & Employer Expectations</h2>
                                    <p className="mt-2 text-sm text-gray-700">Engineering graduates work across construction, manufacturing, energy, transport, environment, aerospace, and tech. Employers expect strong problem-solving skills, technical competence, teamwork, and professionalism.</p>
                                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                                            <h4 className="font-semibold text-gray-900">Core Skills Employers Seek</h4>
                                            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                                                <li>Engineering fundamentals and math</li>
                                                <li>Design and simulation tools</li>
                                                <li>Project management and communication</li>
                                                <li>Health, safety and environmental awareness</li>
                                                <li>Hands-on lab and field experience</li>
                                            </ul>
                                        </div>
                                        <div className="p-4 rounded-lg bg-gray-50 border border-gray-100">
                                            <h4 className="font-semibold text-gray-900">Certifications & Extras</h4>
                                            <ul className="mt-2 list-disc pl-5 text-sm text-gray-700 space-y-1">
                                                <li>Professional Engineer (PE) licensing where applicable</li>
                                                <li>Industry-specific training (e.g., welding, PLCs, HVAC)</li>
                                                <li>Software: CAD, FEA tools, MATLAB, Simulink</li>
                                                <li>Safety: NEBOSH, OSHA basics</li>
                                            </ul>
                                        </div>
                                    </div>
                                </section>

                                <section className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm">
                                    <h2 className="text-xl font-semibold text-gray-900">How to Choose an Engineering Discipline</h2>
                                    <p className="mt-2 text-sm text-gray-700">Think about whether you prefer fieldwork and infrastructure, machinery and product development, electrical systems, computing hardware, chemical processes, or environmental solutions. Review lab facilities, internship links, and elective options.</p>
                                    <div className="mt-3 grid gap-3 sm:grid-cols-3">
                                        <div className="p-3 rounded-lg bg-blue-50 border border-blue-100 text-sm text-blue-700">Hands-on labs & workshops</div>
                                        <div className="p-3 rounded-lg bg-green-50 border border-green-100 text-sm text-green-700">Industry internships & placements</div>
                                        <div className="p-3 rounded-lg bg-gray-50 border border-gray-100 text-sm text-gray-700">Professional accreditation & outcomes</div>
                                    </div>
                                </section>
                            </main>
                        </header>

                        <aside className="sticky top-8 space-y-4">
                            <div className="rounded-xl bg-white/90 backdrop-blur-sm p-5 border border-gray-200 shadow">
                                <h3 className="text-lg font-semibold text-gray-900">Quick Info</h3>
                                <p className="mt-2 text-sm text-gray-700">Entry: Senior high graduates • Mode: On-site / Blended • Duration: 4 years (typical)</p>
                                <div className="mt-4 grid grid-cols-2 gap-2">
                                    <a className="px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 text-center hover:bg-gray-50" href="#contact">Contact</a>
                                    <a className="px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-700 text-center hover:bg-gray-50" href="#admissions">Admissions</a>
                                </div>
                            </div>

                            <div className="rounded-xl bg-white/90 backdrop-blur-sm p-5 border border-gray-200 shadow">
                                <h4 className="font-semibold text-gray-900">FAQ</h4>
                                <div className="mt-3 space-y-2 text-sm text-gray-700">
                                    <details className="group bg-gray-50 rounded-lg p-2">
                                        <summary className="cursor-pointer font-medium list-none">Which engineering discipline is best for construction?</summary>
                                        <p className="mt-2 text-sm text-gray-700">Civil Engineering and Construction Management focus on infrastructure and site delivery.</p>
                                    </details>

                                    <details className="group bg-gray-50 rounded-lg p-2">
                                        <summary className="cursor-pointer font-medium list-none">Can I switch fields after starting?</summary>
                                        <p className="mt-2 text-sm text-gray-700">Many programs allow electives and minor changes; consult course advisors about credit transfer and bridging subjects.</p>
                                    </details>
                                </div>
                            </div>

                            <div className="rounded-xl bg-white/90 backdrop-blur-sm p-5 border border-gray-200 shadow">
                                <h4 className="font-semibold text-gray-900">Resources</h4>
                                <ul className="mt-3 text-sm text-gray-700 space-y-2">
                                    <li><a className="text-blue-600 hover:underline" href="https://www.asme.org" target="_blank" rel="noreferrer">ASME (Mechanical)</a></li>
                                    <li><a className="text-blue-600 hover:underline" href="https://www.ieee.org" target="_blank" rel="noreferrer">IEEE (Electrical & Computer)</a></li>
                                    <li><a className="text-blue-600 hover:underline" href="https://www.asce.org" target="_blank" rel="noreferrer">ASCE (Civil)</a></li>
                                    <li><a className="text-blue-600 hover:underline" href="https://www.aiche.org" target="_blank" rel="noreferrer">AIChE (Chemical)</a></li>
                                </ul>
                            </div>
                        </aside>
                    </div>
                </div>

                <div className="mt-6 text-center text-xs text-gray-500">© Engineering Programs — University / Institute</div>
            </div>
        </div>
    );
}
