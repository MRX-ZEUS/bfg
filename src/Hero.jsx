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
                className="w-11/12 mx-auto h-[400px] lg:h-[500px] border-4 border-solid border-yellow-500 rounded-xl grid items-center text-center shadow-2xl relative"
            >
                <div className="absolute inset-0 bg-black bg-opacity-50 rounded-xl"></div>

                <ReactTyped
                    strings={["Join Us"]}
                    typeSpeed={50}
                    backSpeed={20}
                    loop
                    className="relative z-10 text-white p-5 rounded-lg font-extrabold text-4xl sm:text-5xl lg:text-6xl shadow-lg max-w-lg mx-auto"
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
                    className="relative z-10 text-yellow-400 bg-black bg-opacity-70 p-4 rounded-lg font-serif text-lg sm:text-xl lg:text-2xl italic block mx-auto shadow-lg max-w-3xl"
                />
            </div>
        </>
    );
}

export default Hero;
