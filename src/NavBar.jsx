import { motion } from "framer-motion";
import { useState } from "react";
import CustomAlert from "./CustomAlert";
function NavBar(){
    const [showAlert, setShowAlert] = useState(false);

    const handleDonateClick = () => {
        setShowAlert(true);
    };

    const closeAlert = () => {
        setShowAlert(false);
    };
    return(
        <motion.div
        initial={{ y:100 }}
        animate={{ x:0,y:0 }}
        transition={{duration:.5}}
        className="bg-[#87CEEB] text-white flex justify-evenly text-sm sm:text-md">
            <span>
                <a href="/">
                <motion.div
                initial={{y:100}}
                animate={{y:0}}
                transition={{duration:1}}
                className="p-1 sm:p-2 m-2 rounded-lg hover:text-black">
                    Home
                </motion.div>
                </a>
            </span>
            <span>
            <a href="#about">
            <motion.div
                initial={{y:100}}
                animate={{y:0}}
                transition={{duration:1}}
                className="p-1 sm:p-2 m-2 rounded-lg hover:text-black">
                    About
                </motion.div>
                </a>
            </span>
            <span>
            <a href="#gallery">
            <motion.div
                initial={{y:100}}
                animate={{y:0}}
                transition={{duration:1}}
                className="p-1 sm:p-2 m-2 rounded-lg hover:text-black">
                    Gallery
                </motion.div>
                </a>
            </span>
            <span>
            <a href="#info">
            <motion.div
                initial={{y:100}}
                animate={{y:0}}
                transition={{duration:1}}
                className="p-1 sm:p-2 m-2 rounded-lg hover:text-black">
                    Info
                </motion.div>
                </a>
            </span>
            <span>
            <button href="/">
                <motion.div
                initial={{y:100}}
                animate={{y:0}}
                transition={{duration:1}}
                onClick={handleDonateClick}
                className="p-1 sm:p-2 m-2 rounded-lg hover:text-black bg-[#FFD700]">
                    Donate Now
                </motion.div>
                </button>
            </span>
            {showAlert && (
            <CustomAlert
                message="Thank you for your interest! We really appreciate your kindness. Soon this option will be made available to you."
                onClose={closeAlert}
            />
        )}
        </motion.div>

    )
}

export default NavBar;