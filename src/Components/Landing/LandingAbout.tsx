import "../../index.css";

export default function LandingAbout() {
    const quotes = [
        "About EduGuide",
        "EduGuide is a student-focused web application designed to help learners choose the best Senior High School strand, college course, and school for their future.",
        "It provides smart recommendations based on a student’s interests, skills, and goals, making career and academic decisions easier. The platform also offers a searchable database of schools, universities, strands, and courses, allowing students to compare options and save their choices.",
        "EduGuide aims to guide students toward the right educational path with clarity, confidence, and convenience.",
    ];

    return (
        <section className="w-full h-full bg-[#242424] py-20 flex justify-center">
            <div className="w-[90%] max-w-6xl flex flex-col md:flex-row gap-14 items-center">

                {/* Left Image */}
                <div className="relative w-full md:w-1/2 h-80 md:h-[80vh] rounded-3xl overflow-hidden shadow-xl">

                    {/* Soft glow behind image */}
                    <div className="absolute inset-0 bg-blue-500/20 blur-3xl"></div>

                    <img
                        src="./Image/Landing/check.png"
                        alt="EduGuide Illustration"
                        className="relative w-full h-full object-cover rounded-3xl saturate-125"
                    />
                </div>

                {/* Right Text */}
                <div className="w-full md:w-1/2 flex flex-col justify-center px-2">

                    {quotes.map((quote, index) => (
                        <p
                            key={index}
                            className={`${index === 0
                                    ? "text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg mb-6"
                                    : "text-gray-300 text-lg leading-relaxed mb-4"
                                }`}
                        >
                            {quote}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}
