import { motion } from "framer-motion";
import { useState } from "react";
import CustomAlert from "./CustomAlert";

function NavBar() {
    const [showAlert, setShowAlert] = useState(false);

    const handleDonateClick = () => {
        setShowAlert(true);
    };

    const closeAlert = () => {
        setShowAlert(false);
    };

    return (
        <motion.div
            initial={{ y: 100 }}
            animate={{ x: 0, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-[#1E3A8A] text-white flex justify-evenly items-center py-4 px-6 shadow-lg"
        >
            <span>
                <a href="/">
                    <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                        className="p-3 sm:p-4 m-2 rounded-lg hover:bg-blue-600 hover:text-white text-lg sm:text-xl font-medium transition duration-300"
                    >
                        Home
                    </motion.div>
                </a>
            </span>
            <span>
                <a href="#about">
                    <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                        className="p-3 sm:p-4 m-2 rounded-lg hover:bg-blue-600 hover:text-white text-lg sm:text-xl font-medium transition duration-300"
                    >
                        About
                    </motion.div>
                </a>
            </span>
            <span>
                <a href="#gallery">
                    <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                        className="p-3 sm:p-4 m-2 rounded-lg hover:bg-blue-600 hover:text-white text-lg sm:text-xl font-medium transition duration-300"
                    >
                        Gallery
                    </motion.div>
                </a>
            </span>
            <span>
                <a href="#info">
                    <motion.div
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 1 }}
                        className="p-3 sm:p-4 m-2 rounded-lg hover:bg-blue-600 hover:text-white text-lg sm:text-xl font-medium transition duration-300"
                    >
                        Info
                    </motion.div>
                </a>
            </span>
            <span>
                <a
                    href="https://patreon.com/MINORITYFOOTBALLACADEMY?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink"
                    target="_blank"
                >
                    <button>
                        <motion.div
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1 }}
                            className="p-3 sm:p-4 m-2 rounded-lg text-white font-mono bg-yellow-500 hover:bg-yellow-400 text-xl font-semibold transition duration-300"
                        >
                            Donate Now
                        </motion.div>
                    </button>
                </a>
            </span>
        </motion.div>
    );
}

export default NavBar;
