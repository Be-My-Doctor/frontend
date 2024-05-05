import { Button } from "@/components/ui/button"
import { FaBeer } from "react-icons/fa";

import { useNavigate } from "react-router-dom";

// Defining the Home component responsible for rendering the home page content
export default function Home() {

    const navigate = useNavigate();

    return (
        // Container div for the entire home page content
        <div className="flex flex-col w-full items-center justify-center bg-sky-50">
            

            {/* Footer */}
            <footer className="text-center bg-sky-900 text-white p-4 mt-auto w-full">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </footer>
        </div>
    );
}