import { IoIosArrowBack } from "react-icons/io";
import { IoLockClosed } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import DashboardHeader from "../../Dashboard/DashboardHeader";

export default function CollegeCourses() {
    const location = useLocation();
    const guest = (location.state as { user?: any } | undefined)?.user ?? null;
    const CoreCourses: string[] = ["Engineering", "Technology", "Business", "Education", "Law", "Tourism"];
    const OtherCourses: string[] = ["Psychology", "Criminology", "Hospitality Management"];
    const CoreCoursesImage: string[] = [
        "/Image/Course/engineers.png",
        "/Image/Course/IT.png",
        "/Image/Course/business.png",
        "/Image/Course/education.png",
        "/Image/Course/law.png",
        "/Image/Course/tourism.png"
    ];
    const OtherCoursesImage: string[] = ["/Image/Course/pyscho.png", "/Image/Course/crim.png", "/Image/Course/hospitality.png"];
    const [open, setOpen] = useState<number | null>(null);
    const items = [
        { q: "How do I choose the right college course?", a: "Choose based on your interests, career goals, academic strengths, and future industry demand." },
        { q: "Can I shift to another course in college?", a: "Yes, shifting is usually allowed depending on university policies and subject requirements." },
        { q: "What courses are in high demand today?", a: "Courses related to technology, healthcare, engineering, and business are among the most in-demand." }
    ];
    const sanitizePath = (name: string) => "/" + name.replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").toLowerCase();
    const courseRouteMap: Record<string, string> = {
        Engineering: "/Engineering",
        Technology: "/Technologies",
        Business: "/Business"
    };
    const getCoursePath = (name: string) => {
        if (courseRouteMap[name]) return courseRouteMap[name];
        return sanitizePath(name);
    };
    const unlockedCourses = ["Engineering", "Technology", "Business"];
    const renderCourseCards = (courses: string[], images: string[]) =>
        courses.map((course, index) => {
            const path = getCoursePath(course);
            const isUnlocked = unlockedCourses.includes(course);
            if (!isUnlocked) {
                return (
                    <div
                        key={index}
                        className="group relative rounded-2xl overflow-hidden bg-gray-100 shadow-lg transform transition hover:scale-[1.02] w-full h-80"
                        aria-disabled="true"
                        title="Coming soon"
                    >
                        <div className="absolute inset-0">
                            <img
                                src={images[index]}
                                alt={course}
                                onError={(e) => {
                                    (e.currentTarget as HTMLImageElement).src = "/Image/placeholder.png";
                                }}
                                className="w-full h-full object-cover opacity-40"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-gray-800/40" />
                        </div>
                        <div className="relative z-10 h-full flex flex-col p-5 text-gray-900">
                            <div className="flex justify-between items-start gap-2">
                                <div>
                                    <h3 className="text-2xl font-bold chewy-regular">{course}</h3>
                                    <p className="text-sm mt-2 text-gray-700">This course will be available soon.</p>
                                </div>
                                <div className="ml-3">
                                    <div className="rounded-full bg-white p-2 shadow">
                                        <IoLockClosed className="w-5 h-5 text-gray-700" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-auto">
                                <div className="inline-flex items-center gap-2 rounded-full bg-gray-200 px-4 py-2 text-sm text-gray-700 border border-gray-300">
                                    <IoLockClosed className="w-4 h-4" />
                                    Coming soon
                                </div>
                            </div>
                        </div>
                    </div>
                );
            }
            return (
                <article
                    key={index}
                    className="group relative rounded-2xl overflow-hidden shadow-lg transform transition hover:scale-[1.03] w-full h-80 bg-white border border-gray-200"
                >
                    <div className="absolute inset-0">
                        <img
                            src={images[index]}
                            alt={course}
                            onError={(e) => {
                                (e.currentTarget as HTMLImageElement).src = "/Image/placeholder.png";
                            }}
                            className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/30" />
                    </div>
                    <div className="relative z-10 h-full flex flex-col p-6 text-white">
                        <div>
                            <h3 className="text-2xl font-semibold chewy-regular">{course}</h3>
                            <p className="text-sm mt-2 text-white/90">Explore subjects, specializations, and career paths in {course}.</p>
                        </div>
                        <div className="mt-auto flex gap-3">
                            <Link to={path} state={{ user: guest }} className="flex-1 text-center py-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition font-semibold">
                                View Details
                            </Link>
                            <button className="w-12 rounded-lg bg-white/30 flex items-center justify-center hover:bg-white/40 transition text-yellow-300">★</button>
                        </div>
                    </div>
                </article>
            );
        });
    return (
        <div className="min-h-screen w-full bg-linear-to-b from-white to-blue-100 text-gray-900">
            <DashboardHeader guest={guest} />
            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex items-center justify-between">
                    <Link to="/Dashboard" className="flex items-center gap-3 text-gray-700 hover:text-gray-900">
                        <IoIosArrowBack size={22} />
                        <span className="font-medium">Back</span>
                    </Link>
                    <h1 className="text-3xl font-bold chewy-regular">College Courses Explorer</h1>
                    <div className="w-24" />
                </div>
                <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="col-span-2 rounded-2xl bg-white p-6 border border-gray-200 shadow-md">
                        <h2 className="text-4xl font-bold chewy-regular mb-4">Introduction to College Courses</h2>
                        <p className="text-gray-700 leading-relaxed">
                            College offers a wide variety of degree programs designed to prepare you for professional careers, skills development, or advanced studies. Choose a course that matches your passion and future goals.
                        </p>
                        <div className="mt-8">
                            <h3 className="text-2xl font-semibold mb-4">Core Programs</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">{renderCourseCards(CoreCourses, CoreCoursesImage)}</div>
                        </div>
                        <div className="mt-8">
                            <h3 className="text-2xl font-semibold mb-4">Other Courses</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">{renderCourseCards(OtherCourses, OtherCoursesImage)}</div>
                        </div>
                    </div>
                    <aside className="rounded-2xl bg-white p-6 border border-gray-200 shadow-md h-fit">
                        <h3 className="text-2xl font-semibold mb-4">FAQ</h3>
                        <div className="space-y-3">
                            {items.map((it, i) => (
                                <div key={i} className="rounded-xl border border-gray-200 shadow-sm bg-gray-50">
                                    <button onClick={() => setOpen(open === i ? null : i)} className="w-full text-left px-4 py-3 flex items-center justify-between gap-3">
                                        <span className="font-medium">{it.q}</span>
                                        <span className="text-2xl">{open === i ? "−" : "+"}</span>
                                    </button>
                                    <div className={`px-4 transition-all duration-300 overflow-hidden ${open === i ? "max-h-60 py-3" : "max-h-0"}`}>
                                        <p className="text-sm text-gray-700 leading-relaxed">{it.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 border-t pt-4 text-sm text-gray-600">
                            Need more info? <Link to="/contact" className="text-blue-600 underline">Contact us</Link>
                        </div>
                    </aside>
                </section>
            </div>
        </div>
    );
}
