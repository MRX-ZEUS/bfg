const CustomAlert = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white text-black p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-2">Alert</h2>
                <p>{message}</p>
                <button
                    onClick={onClose}
                    className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition duration-300"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default CustomAlert;
