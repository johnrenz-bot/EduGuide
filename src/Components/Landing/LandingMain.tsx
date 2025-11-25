



import "../.././index.css";

export default function LandingMain() {

    const quote = [
        "Welcome to EduGuide! 🎓",
        "Your smart companion in choosing the right SHS strand, college course, and university.",
        "Discover your interests, explore schools, and find the best path for your future — all in one place.",
        "Your future begins here. Start your journey with EduGuide today!",


    ]


    return (
        <div className="w-full h-full flex flex-col">
            <div className="w-full h-[50%]  flex items-center justify-center ps-2  ">
                {quote[0]}
            </div>

            <div className="w-full h-[50%] ps-2 flex justify-around gap-2 items-center ">
                <div className="w-[50%] h-full ps-2 flex justify-around gap-2 items-center ">
                    {quote[1]}


                </div>

                <div className="w-[50%] h-full ps-2 flex justify-around gap-2 items-center ">

                    {quote[2]}

                </div>




            </div>


            <div className="w-full h-[50%]  flex items-center ps-2 justify-center ">


                {quote[3]}


            </div>


        </div>
    )



}