import { motion } from "framer-motion"
export default function About() {
    return (
        <>
            <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{duration:2}}
             exit={{ opacity: 0 }}
            id="about" 
            className="bg-gray-800 w-11/12 mx-auto rounded-lg p-6 m-4 border-4 border-solid border-yellow-500 shadow-lg">
                <button className="block mx-auto m-4 text-gray-800 p-3 bg-yellow-300 rounded-lg text-center font-bold transition duration-200 hover:bg-yellow-400">
                    About Us
                </button>
                <div className="grid grid-cols-1">
                <div>
                <h2 className="text-xl font-serif text-yellow-300 text-center underline mb-2">
                    Our Mission
                </h2>
                <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:2}}
                >
                <img src="./img_1.jpg" alt="Image 1" className="w-8/12 md:w-5/12 rounded-lg block mx-auto m-4 shadow-md" />
                </motion.div>
                <h3 className="text-gray-200 text-lg leading-8 mb-4">
                    "Empowering the next generation of football stars! Our minority football academy is dedicated to providing a platform for underrepresented youth to shine. With top-notch training, mentorship, and opportunities, we're bridging the gap in representation and fostering a love for the beautiful game."
                </h3>
                </div>
                <div>
                <h2 className="text-xl font-serif text-yellow-300 text-center underline mb-2">
                    Our Vision
                </h2>
                <img src="./img_2.jpg" alt="Image 2" className="w-8/12 md:w-5/12 rounded-lg block mx-auto m-4 shadow-md" />
                <h3 className="text-gray-200 text-lg leading-8 mb-4">
                    We envision a world where every young boy, regardless of his background or resources, has the opportunity to play football, build lasting friendships, and develop the life skills needed to thrive. By instilling values of compassion, respect, and integrity, we strive to nurture future leaders who will make a positive impact in their communities.
                </h3>
                </div>
                <div>
                <h2 className="text-xl font-serif text-yellow-300 text-center underline mb-2">
                    Our Values
                </h2>
                <h3 className="text-gray-200 text-lg leading-8 mb-4">
                    <ol className="list-decimal list-inside">
                        <li className="mb-2">
                            <u><b><i>Faith</i></b></u>
                            <i> &nbsp; We believe that faith is the foundation of our strength. Through prayer, encouragement, and support, we grow together as a team.</i>
                        </li>
                        <li className="mb-2">
                            <u><b><i>Community</i></b></u>
                            <i> &nbsp; We are committed to uplifting our local community. We engage in outreach programs, helping those in need and promoting sportsmanship and teamwork.</i>
                        </li>
                        <li className="mb-2">
                            <u><b><i>Integrity</i></b></u>
                            <i> &nbsp; We play by the rules, on and off the field. Our commitment to honesty and fairness shapes our character and strengthens our bonds.</i>
                        </li>
                        <li>
                            <u><b><i>Respect</i></b></u>
                            <i> &nbsp; We honor each other and our opponents, understanding that every player has value and contributes to the game.</i>
                        </li>
                    </ol>
                </h3>
                </div>
                </div>
            </motion.div>
        </>
    )
}
