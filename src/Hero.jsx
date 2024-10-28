import { ReactTyped } from "react-typed";
function Hero() {
    return (
        <>
            <div
                style={{
                    backgroundImage: "url('./hero_bg.jpg')",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
                className="w-11/12 rounded-lg mx-auto h-72 border-2 border-solid border-yellow-500 grid items-center text-center shadow-lg"
            >
                <ReactTyped
                    strings={["Join Us"]}
                    typeSpeed={50}
                    backSpeed={20}
                    loop
                    className="bg-black bg-opacity-70 text-white p-3 rounded-lg font-serif text-2xl block mx-auto mb-2 shadow-md"
                />
                <ReactTyped
                    strings={[
                        "Every Kick Counts: Help Us Empower Young Talent!",
                        "Together We Can Make a Difference: Donate Today!",
                        "Your Support Can Turn Dreams into Reality for Aspiring Players!",
                        "Fuel Their Passion: Help Fund Our Minority Football Team!"
                    ]}
                    typeSpeed={20}
                    backSpeed={30}
                    loop
                    className="text-green-400 bg-black bg-opacity-70 p-3 rounded-lg font-serif text-md italic block mx-auto shadow-md"
                />
            </div>
        </>
    );
}

export default Hero;
