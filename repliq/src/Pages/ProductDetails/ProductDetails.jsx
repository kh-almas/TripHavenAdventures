import React from 'react';

const ProductDetails = () => {
    return (
        <div className="container mx-auto py-8 flex justify-center items-center h-screen">
            <div className="max-w-4xl mx-auto bg-white rounded-md shadow-md overflow-hidden">
                <div className="md:flex">
                    <div className="md:flex-shrink-0 flex justify-center items-center">
                        <img
                            src="https://via.placeholder.com/400"
                            alt="Wireless Bluetooth Headphones"
                            className="h-64 w-full object-cover md:w-64"
                        />
                    </div>
                    <div className="p-6">
                        <h2 className="text-3xl font-semibold text-gray-800">Wireless Bluetooth Headphones</h2>
                        <p className="text-gray-600">$99.99</p>
                        <p className="text-gray-700 mt-4">
                            Experience superior sound quality and freedom with our wireless Bluetooth headphones. These headphones
                            provide a comfortable fit, noise cancellation, and long battery life for an immersive audio experience.
                        </p>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold text-gray-800">Product Details</h3>
                            <div className="mt-2">
                                <p className="text-gray-700">
                                    <span className="font-medium">Brand: </span>Acoustic Vibes
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-medium">Color: </span>Black
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-medium">Weight: </span>0.3 lbs
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-medium">Dimensions: </span>7.5 x 3.5 x 9 inches
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;