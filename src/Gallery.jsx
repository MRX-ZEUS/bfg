const Gallery = () => {
    const images = [
        './img_1.jpg',
        './img_2.jpg',
        './img_3.jpg',
        './img_4.jpg',
        './img_5.jpg',
        './img_6.jpg'
    ];

    return (
        <>
            <div id="gallery" className="bg-gray-800 w-11/12 mx-auto rounded-lg p-6 m-4 border-4 border-solid border-yellow-500 shadow-lg">
                <h2 className="text-3xl font-bold text-center text-yellow-300 mb-6">
                    Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                    {images.map((src, index) => (
                        <div className="relative group" key={index}>
                            <img
                                src={src}
                                alt={`Gallery Image ${index + 1}`}
                                className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                                <span className="text-white font-semibold text-lg">View</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Gallery;
