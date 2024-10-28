import CustomAlert from "./CustomAlert";
import { useState } from "react";
export default function Info() {
    const [showAlert, setShowAlert] = useState(false);

    const handleDonateClick = () => {
        setShowAlert(true);
    };

    const closeAlert = () => {
        setShowAlert(false);
    };
    return (
        <div id="info" className="bg-gray-900 text-white p-6 rounded-lg shadow-lg w-11/12 mx-auto mt-10">
            <h2 className="text-2xl font-bold text-center mb-4">Info Section</h2>
            <div className="mb-6">
                <p className="text-lg">
                    <span className="font-semibold">Name:</span> Qayyum Masih
                </p>
                <p className="text-lg">
                    <span className="font-semibold">Country:</span> Pakistan
                </p>
                <p className="text-lg">
                    <span className="font-semibold">Phone:</span> +92 345 918 6245
                </p>
                <p className="text-lg">
                    <span className="font-semibold">Special Thanks to :</span> Sanobar Qayyum
                </p>
            </div>
            <div className="flex justify-center">
                    <button onClick={handleDonateClick} className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-400 transition duration-300">
                        Contact the Developer
                    </button>
            </div>
            {showAlert && (
                <CustomAlert
                    message="Thank you for your interest! I really appreciate your wish to contact me . You can always contact 'Sanobar Qayyum' and say We wanna meet Zeus Arora."
                    onClose={closeAlert}
                />)}
        </div>
    );
}
