import "../.././index.css";
import { useState, useEffect } from "react";

export default function LandingHeader() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    return (
        <div className="w-full h-[15vh] flex">
            <div className="w-full h-full flex justify-center items-center">
                <p>EduGuide</p>
            </div>

            <div className="w-full h-full">
                <ul className="w-full h-full flex justify-around items-center">
                    <li>Home</li>
                    <li>About</li>
                    <li>Features</li>
                </ul>
            </div>

            <div className="w-full h-full flex justify-center items-center">
                <button
                    onClick={() => setIsOpen(true)}
                    className="p-2 px-4 border rounded-xl"
                >
                    Login
                </button>
            </div>

            {isOpen && (
                <div className="fixed inset-0 flex justify-center items-center bg-white bg-opacity-90">
                    <div className="bg-white p-6 rounded-xl w-80 relative">

                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-2 left-2 text-sm border px-2 py-1 rounded"
                        >
                            Back
                        </button>

                        <h2 className="text-lg font-bold mb-4 mt-6 text-center">Login</h2>

                        <input
                            type="text"
                            placeholder="Username"
                            className="w-full p-2 mb-3 border rounded"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full p-2 mb-3 border rounded"
                        />

                        <div className="flex justify-end gap-2 mt-2">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="px-4 py-2 border rounded"
                            >
                                Cancel
                            </button>
                            <button className="px-4 py-2 bg-blue-500 text-white rounded">
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
