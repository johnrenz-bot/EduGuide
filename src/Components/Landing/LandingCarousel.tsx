import { useState } from "react";

interface Slide {
    img: string;
    name: string;
    url: string;
}

export default function LandingCarousel() {
    const slides: Slide[] = [
        { img: './Image/Univesity/up.jpg', name: 'University of the Philippines', url: 'https://up.edu.ph/' },
        { img: './Image/Univesity/dela.jpg', name: 'De La Salle University', url: 'https://www.dlsu.edu.ph/' },
        { img: './Image/Univesity/newera.jpg', name: 'New Era University', url: 'https://www.neu.edu.ph/main/' },
        { img: './Image/Univesity/ust.jpg', name: 'University of Santo Tomas', url: 'https://www.ust.edu.ph/' },
        { img: './Image/Univesity/Nu.jpg', name: 'National University', url: 'https://www.national-u.edu.ph/' },
    ];

    const [paused, setPaused] = useState(false);

    return (
        <main className="w-full h-full bg-linear-to-b from-blue-100 via-purple-100 to-pink-100 flex flex-col py-10">
            <div className="w-full flex justify-center mb-8">
                <p className="text-black text-5xl font-serif hover:text-blue-600 transition-colors duration-300 cursor-pointer text-center">
                    Explore All Universities
                </p>
            </div>

            <div 
                className="w-full h-[25vh] overflow-hidden relative"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                <div
                    className={`flex gap-6 whitespace-nowrap absolute top-0 left-0 animate-scroll ${paused ? "pause-animation" : ""}`}
                >
                    {slides.map((slide, idx) => (
                        <a
                            key={idx}
                            href={slide.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative flex-none w-[55vh] h-[25vh] rounded-2xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 group"
                        >
                            <img
                                src={slide.img}
                                alt={slide.name}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white py-2 px-4 text-center text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                {slide.name}
                            </div>
                        </a>
                    ))}

                    {slides.map((slide, idx) => (
                        <a
                            key={`clone-${idx}`}
                            href={slide.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative flex-none w-[55vh] h-[25vh] rounded-2xl overflow-hidden shadow-lg"
                        >
                            <img
                                src={slide.img}
                                alt={slide.name}
                                className="w-full h-full object-cover opacity-50"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </main>
    );
}
