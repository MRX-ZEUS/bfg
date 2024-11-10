import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        exit={{ opacity: 0 }}
        id="about"
        className="bg-[#2A2A2A] text-white w-11/12 mx-auto rounded-lg p-8 m-6 border-4 border-solid border-yellow-500 shadow-2xl"
      >
        <button className="block mx-auto m-6 text-gray-800 p-4 bg-yellow-400 rounded-lg text-center font-semibold text-xl transition duration-300 hover:bg-yellow-500 hover:text-white">
          About Us
        </button>

        <div className="grid grid-cols-1 gap-12">

          {/* Mission Section */}
          <div>
            <h2 className="text-3xl font-serif text-yellow-300 text-center underline mb-4">
              Our Mission
            </h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <img
                src="./img_1.jpg"
                alt="Our Mission"
                className="w-full md:w-10/12 lg:w-8/12 rounded-xl block mx-auto shadow-xl mb-6"
              />
            </motion.div>
            <p className="text-lg text-gray-200 leading-8 mb-6">
              "Empowering the next generation of football stars! Our minority football academy is dedicated to providing a platform for underrepresented youth to shine. With top-notch training, mentorship, and opportunities, we're bridging the gap in representation and fostering a love for the beautiful game."
            </p>
          </div>

          {/* Vision Section */}
          <div>
            <h2 className="text-3xl font-serif text-yellow-300 text-center underline mb-4">
              Our Vision
            </h2>
            <img
              src="./img_2.jpg"
              alt="Our Vision"
              className="w-full md:w-10/12 lg:w-8/12 rounded-xl block mx-auto shadow-xl mb-6"
            />
            <p className="text-lg text-gray-200 leading-8 mb-6">
              We envision a world where every young boy, regardless of his background or resources, has the opportunity to play football, build lasting friendships, and develop the life skills needed to thrive. By instilling values of compassion, respect, and integrity, we strive to nurture future leaders who will make a positive impact in their communities.
            </p>
          </div>

        </div>

        {/* Football Club Essentials Section */}
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-center text-yellow-500 mb-12">Football Club Essentials</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

            {/* Football Section */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-gray-300 hover:border-yellow-400 transition duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Football: The Heart of the Game</h2>
              <p className="text-lg text-gray-600 mb-4">
                The football is the central element of the game. Without it, there would be no match. The ball needs to be durable, responsive, and suitable for all weather conditions to ensure a consistent playing experience.
              </p>
            </div>

            {/* Shoes Section */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-gray-300 hover:border-yellow-400 transition duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shoes: For Playing with Confidence</h2>
              <p className="text-lg text-gray-600 mb-4">
                Football boots are designed to provide the necessary grip, speed, and protection for players during matches. Cleats on the bottom help players maintain stability while running, cutting, and pivoting.
              </p>
            </div>

            {/* Shin Guards Section */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-gray-300 hover:border-yellow-400 transition duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shin Guards: Protecting Our Players</h2>
              <p className="text-lg text-gray-600 mb-4">
                Shin guards are crucial to protecting the lower legs from tackles, collisions, and accidental impacts. They help prevent injuries and keep players safe while playing.
              </p>
            </div>

            {/* Jerseys Section */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-gray-300 hover:border-yellow-400 transition duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Jerseys: Unity in Diversity</h2>
              <p className="text-lg text-gray-600 mb-4">
                Team jerseys symbolize unity, strength, and pride. They help us identify each other on the field and create a sense of belonging within the team.
              </p>
            </div>

            {/* Shorts & Socks Section */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-gray-300 hover:border-yellow-400 transition duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shorts and Socks: Comfort and Mobility</h2>
              <p className="text-lg text-gray-600 mb-4">
                Football shorts and socks are designed for comfort, breathability, and freedom of movement. They allow players to run, slide, and tackle without restriction.
              </p>
            </div>

            {/* Goalkeeper Gloves Section */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-gray-300 hover:border-yellow-400 transition duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Goalkeeper Gloves: A Protector’s Essential Gear</h2>
              <p className="text-lg text-gray-600 mb-4">
                Goalkeeper gloves are specially designed to provide grip and protection for goalkeepers. They allow them to catch, deflect, and protect the ball with confidence.
              </p>
            </div>

            {/* Water Bottles Section */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-gray-300 hover:border-yellow-400 transition duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Water Bottles: Hydration is Key</h2>
              <p className="text-lg text-gray-600 mb-4">
                Staying hydrated during physical activity is essential for performance and recovery. Water bottles are necessary to keep players replenished and focused on the game.
              </p>
            </div>

            {/* First Aid Kits Section */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-gray-300 hover:border-yellow-400 transition duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">First Aid Kits: Prepared for Anything</h2>
              <p className="text-lg text-gray-600 mb-4">
                A first aid kit provides the necessary tools to address minor injuries or discomforts that might arise during a game or practice. It includes items like bandages, antiseptic wipes, and ice packs.
              </p>
            </div>

            {/* Training Equipment Section */}
            <div className="bg-white p-8 rounded-lg shadow-xl border-2 border-gray-300 hover:border-yellow-400 transition duration-300">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Training Equipment: Building Skills and Teamwork</h2>
              <p className="text-lg text-gray-600 mb-4">
                Training equipment such as cones, ladders, markers, and balls help players develop their skills, agility, and teamwork during practice sessions.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-12 bg-[#1A202C] p-10 rounded-lg shadow-xl border-t-4 border-yellow-500">
          <h2 className="text-3xl font-bold text-center mb-8 text-yellow-600">Core Values in Action</h2>

          <p className="text-xl mb-6 text-gray-200">
            <strong className="text-yellow-500">Faith:</strong> We believe that faith is the foundation of our strength. Through prayer, encouragement, and support, we grow together as a team—just as every football match begins with a sense of hope, trust, and belief in each other.
          </p>

          <p className="text-xl mb-6 text-gray-200">
            <strong className="text-yellow-500">Community:</strong> We are committed to uplifting our local community. From engaging in outreach programs to helping those in need, we promote sportsmanship, teamwork, and inclusivity both on and off the field.
          </p>

          <p className="text-xl mb-6 text-gray-200">
            <strong className="text-yellow-500">Dedication:</strong> Our players exhibit unyielding commitment to the game. Every training session, every match, and every challenge we face is an opportunity to learn, grow, and push our limits.
          </p>

          <p className="text-xl mb-6 text-gray-200">
            <strong className="text-yellow-500">Excellence:</strong> Excellence is not just about winning; it's about performing at your best, demonstrating integrity, and striving for greatness every day—whether it’s on the field or in life.
          </p>
        </div>

      </motion.div>
    </>
  );
}
