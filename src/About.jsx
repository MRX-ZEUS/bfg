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
        className="bg-gray-800 w-11/12 mx-auto rounded-lg p-6 m-4 border-4 border-solid border-yellow-500 shadow-lg"
      >
        <button className="block mx-auto m-4 text-gray-800 p-3 bg-yellow-300 rounded-lg text-center font-bold transition duration-200 hover:bg-yellow-400">
          About Us
        </button>

        <div className="grid grid-cols-1">
          {/* Mission Section */}
          <div>
            <h2 className="text-xl font-serif text-yellow-300 text-center underline mb-2">
              Our Mission
            </h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              <img
                src="./img_1.jpg"
                alt="Image 1"
                className="w-8/12 md:w-5/12 rounded-lg block mx-auto m-4 shadow-md"
              />
            </motion.div>
            <h3 className="text-gray-200 text-lg leading-8 mb-4">
              "Empowering the next generation of football stars! Our minority football academy is dedicated to providing a platform for underrepresented youth to shine. With top-notch training, mentorship, and opportunities, we're bridging the gap in representation and fostering a love for the beautiful game."
            </h3>
          </div>

          {/* Vision Section */}
          <div>
            <h2 className="text-xl font-serif text-yellow-300 text-center underline mb-2">
              Our Vision
            </h2>
            <img
              src="./img_2.jpg"
              alt="Image 2"
              className="w-8/12 md:w-5/12 rounded-lg block mx-auto m-4 shadow-md"
            />
            <h3 className="text-gray-200 text-lg leading-8 mb-4">
              We envision a world where every young boy, regardless of his background or resources, has the opportunity to play football, build lasting friendships, and develop the life skills needed to thrive. By instilling values of compassion, respect, and integrity, we strive to nurture future leaders who will make a positive impact in their communities.
            </h3>
          </div>
        </div>

        {/* Football Club Essentials */}
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-4xl font-bold text-center mb-8">Football Club Essentials</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Football Section */}
            <div className="bg-blue-700 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Football: The Heart of the Game</h2>
              <p className="text-lg">
                The football is the central element of the game. Without it, there would be no match. The ball needs to be durable, responsive, and suitable for all weather conditions to ensure a consistent playing experience.
              </p>
              <p className="mt-4">
                A good quality football helps improve passing, control, and overall game flow. A proper ball is essential for skill development and strategic play on the field.
              </p>
            </div>

            {/* Shoes Section */}
            <div className="bg-blue-700 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Shoes: For Playing with Confidence</h2>
              <p className="text-lg">
                Football boots are designed to provide the necessary grip, speed, and protection for players during matches. Cleats on the bottom help players maintain stability while running, cutting, and pivoting.
              </p>
              <p className="mt-4">
                The right shoes make a significant difference in a player's performance, reducing the risk of injury and improving comfort on the pitch. Shoes also represent a sense of readiness and determination—essential elements for success both individually and as a team.
              </p>
            </div>

            {/* Shin Guards Section */}
            <div className="bg-blue-700 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Shin Guards: Protecting Our Players</h2>
              <p className="text-lg">
                Shin guards are crucial to protecting the lower legs from tackles, collisions, and accidental impacts. They help prevent injuries and keep players safe while playing.
              </p>
              <p className="mt-4">
                Safety comes first, and having properly fitted shin guards shows our commitment to playing with integrity, respecting our opponents, and ensuring everyone is safe while playing.
              </p>
            </div>

            {/* Jerseys Section */}
            <div className="bg-blue-700 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Jerseys: Unity in Diversity</h2>
              <p className="text-lg">
                Team jerseys symbolize unity, strength, and pride. They help us identify each other on the field and create a sense of belonging within the team.
              </p>
              <p className="mt-4">
                Wearing our team colors not only builds team spirit but also reminds us of our collective mission to uplift each other through sport. Each player, regardless of background, wears the same jersey, emphasizing equality and teamwork.
              </p>
            </div>

            {/* Shorts & Socks Section */}
            <div className="bg-blue-700 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Shorts and Socks: Comfort and Mobility</h2>
              <p className="text-lg">
                Football shorts and socks are designed for comfort, breathability, and freedom of movement. They allow players to run, slide, and tackle without restriction.
              </p>
              <p className="mt-4">
                Proper attire ensures players can focus on the game without discomfort or distractions. The right clothing is essential to perform at our best and support the team's mission of faith, community, and respect.
              </p>
            </div>

            {/* Goalkeeper Gloves Section */}
            <div className="bg-blue-700 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Goalkeeper Gloves: A Protector’s Essential Gear</h2>
              <p className="text-lg">
                Goalkeeper gloves are specially designed to provide grip and protection for goalkeepers. They allow them to catch, deflect, and protect the ball with confidence.
              </p>
              <p className="mt-4">
                As the last line of defense, the goalkeeper's gloves are a vital tool. They not only protect the hands but also help goalkeepers make critical saves, demonstrating determination, courage, and integrity in every match.
              </p>
            </div>

            {/* Water Bottles Section */}
            <div className="bg-blue-700 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Water Bottles: Hydration is Key</h2>
              <p className="text-lg">
                Staying hydrated during physical activity is essential for performance and recovery. Water bottles are necessary to keep players replenished and focused on the game.
              </p>
              <p className="mt-4">
                Hydration boosts energy levels, improves focus, and helps players recover faster, ensuring that everyone remains at their peak performance. As a team, we support each other by ensuring that all players are well-hydrated and ready for every challenge.
              </p>
            </div>

            {/* First Aid Kits Section */}
            <div className="bg-blue-700 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">First Aid Kits: Prepared for Anything</h2>
              <p className="text-lg">
                A first aid kit provides the necessary tools to address minor injuries or discomforts that might arise during a game or practice. It includes items like bandages, antiseptic wipes, and ice packs.
              </p>
              <p className="mt-4">
                The safety of our players is a priority, and having a first aid kit on hand shows our commitment to taking care of one another. It also reinforces the value of respecting and caring for each other’s well-being, both on and off the field.
              </p>
            </div>

            {/* Training Equipment Section */}
            <div className="bg-blue-700 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Training Equipment: Building Skills and Teamwork</h2>
              <p className="text-lg">
                Training equipment such as cones, ladders, markers, and balls help players develop their skills, agility, and teamwork during practice sessions.
              </p>
              <p className="mt-4">
                Consistent practice with the right training equipment builds player confidence, technical skills, and team cohesion. It reflects our dedication to growth and improvement, both individually and as a community.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div className="mt-10">
          <h2 className="text-3xl font-bold text-center mb-4">Core Values in Action</h2>
          <p className="text-xl mb-4">
            <strong>Faith:</strong> We believe that faith is the foundation of our strength. Through prayer, encouragement, and support, we grow together as a team—just as every football match begins with a sense of hope, trust, and belief in each other.
          </p>
          <p className="text-xl mb-4">
            <strong>Community:</strong> We are committed to uplifting our local community. From engaging in outreach programs to helping those in need, we promote sportsmanship, teamwork, and positive values. Football, like our community, thrives when we all work together.
          </p>
          <p className="text-xl mb-4">
            <strong>Integrity:</strong> We play by the rules, on and off the field. Integrity in football means being honest in our actions, showing respect to our opponents, and playing with fairness. Our commitment to honesty and fairness shapes our character and strengthens our bonds.
          </p>
          <p className="text-xl mb-4">
            <strong>Respect:</strong> We honor each other, our coaches, and our opponents, understanding that every player has value and contributes to the game. Respect on the field fosters unity, understanding, and teamwork, making every match a celebration of the game.
          </p>
        </div>
      </motion.div>
    </>
  );
}
