
import "../.././index.css";

export default function LandingAbout() {

    const quote = [
        "  About EduGuide",
        "EduGuide is a student-focused web application designed to help learners choose the best Senior High School strand, college course, and school for their future. ",
        "It provides smart recommendations based on a student’s interests, skills, and goals, making career and academic decisions easier. The platform also offers a searchable database of schools, universities, strands, and courses, allowing students to compare options and save their choices. ",
        " EduGuide aims to guide students toward the right educational path with clarity, confidence, and convenience.",


    ]


    return (
        <div className="w-full h-full flex">

            <div className="w-full h-full  flex justify-center items-center ">

                <div className="w-[55%] h-[85%] border rounded-xl">

                </div>
            </div>



            <div className="w-full h-full flex justify-center items-center f">


                <p className="text-xl font-semibold">
                    {quote.map((quote, index) => (
                        <p key={index}>{quote}</p>
                    ))}

                </p>
            </div>

        </div>
    )



}
