import "../../index.css";
import {
    IoBulbOutline,
    IoSchoolOutline,
    IoRocketOutline
} from "react-icons/io5";

export default function LandingMain() {
    const quote = [
        "Welcome to EduGuide! 🎓",
        "Your smart companion in choosing the right SHS strand, college course, and university.",
        "Discover your interests, explore schools, and find the best path for your future — all in one place.",
        "Your future begins here. Start your journey with EduGuide today!",
    ];

    const icons = [
        <IoBulbOutline className="w-12 h-12 text-gray-900 opacity-90 hover:text-yellow-700 hover:scale-105" />,
        <IoSchoolOutline className="w-12 h-12 text-gray-900 opacity-90 hover:text-green-700 hover:scale-105" />,
        <IoRocketOutline className="w-12 h-12 text-gray-900 opacity-90 hover:text-blue-700 hover:scale-105" />,
    ];

    return (
        <div className="w-full h-full flex flex-col bg-linear-to-b from-blue-100 to-white/30 backdrop-blur-xl">

            {/* Main Welcome Title */}
            <div className="w-full h-[40%] flex items-center justify-center px-4 text-5xl md:text-6xl font-extrabold chewy-regular text-center text-gray-800 drop-shadow-lg">
                {quote[0]}
            </div>

            {/* Quote Cards */}
            <div className="w-full h-[60%] flex justify-center items-center px-4">
                <div className="w-full md:w-[80%] flex flex-col md:flex-row justify-center items-center gap-6">

                    {/* Card 1 */}
                    <div className="w-full md:w-[30%] h-[200px] rounded-2xl bg-white/20 backdrop-blur-md border-2 border-black/50 shadow-2xl p-6 
                                    flex flex-col justify-center items-center text-center text-gray-900 font-medium gap-3">
                        {icons[0]}
                        {quote[1]}
                    </div>

                    {/* Card 2 */}
                    <div className="w-full md:w-[30%] h-[200px] rounded-2xl bg-white/20 backdrop-blur-md border-2 border-black/50 shadow-2xl p-6 
                                    flex flex-col justify-center items-center text-center text-gray-900 font-medium gap-3">
                        {icons[1]}
                        {quote[2]}
                    </div>

                    {/* Card 3 */}
                    <div className="w-full md:w-[30%] h-[200px] rounded-2xl bg-white/20 backdrop-blur-md border-2 border-black/50 shadow-2xl p-6 
                                    flex flex-col justify-center items-center text-center text-gray-900 font-medium gap-3">
                        {icons[2]}
                        {quote[3]}
                    </div>

                </div>
            </div>

        </div>
    );
}
