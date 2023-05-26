import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes} from "react-icons/fa";

const navLinks = [
    {
        title : "Home",
        link : "#",
    },
    {
        title : "Home",
        link : "#",
    },
    {
        title : "Home",
        link : "#",
    },
    {
        title : "Home",
        link : "#",
    },
]

const Topbar = () => {

    const [open, setOpen] = useState(false);

    const handleMenu = () => {
        setOpen((prev) => !prev);
    }
    return (  
        <nav className="font-['Montserrat'] not-italic">
            <header className="mx-auto px-4 sm:px-6 lg:px-6">
                <div className="flex items-center justify-between h-[72px] lg:h-[93px]">
                    <div className="md:ml-12">
                        <h1 className="text-4xl font-bold leading-9 text-white">BookMania</h1>
                    </div>
                    {/* navlinks */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4 md:mr-12">
                            {navLinks.map((link, index) => (
                                <Link
                                key={index}
                                className="text-white px-3 py-2 cursor-pointer
                                rounded-md text-base font-['Montserrat'] leading-5 not-italic font-medium 
                                transition-all duration-500"
                                href={link.link}
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                    {/* hambuger menu */}
                    <div className="-mr-2 flex md:hidden">
                        <button type="button" onClick={handleMenu} 
                        className="inline-flex items-center justify-center p-2 rounded-md
                        text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none
                        focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open Main Menu</span>
                            {open == true ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </header>
            
        </nav>
    );
}
 
export default Topbar;