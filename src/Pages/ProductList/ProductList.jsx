import React from 'react';
import {Link} from "react-router-dom";

const ProductList = () => {
    return (
        <div className="container mx-auto py-8 pt-20">
            <h1 className="text-3xl font-bold mb-8">Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="max-w-sm mx-auto bg-white rounded-md shadow-md overflow-hidden">
                    <img src="https://via.placeholder.com/200" alt="Product 1" className="w-full h-48 object-cover" />
                    <div className="px-4 py-3">
                        <h2 className="text-xl font-semibold text-gray-800">Product 1</h2>
                        <p className="text-gray-600">$9.99</p>
                        <p className="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Link to={'/product-details'} className="btn btn-active btn-ghost w-full mt-4 text-white">View Details</Link>
                    </div>
                </div>
                <div className="max-w-sm mx-auto bg-white rounded-md shadow-md overflow-hidden">
                    <img src="https://via.placeholder.com/200" alt="Product 1" className="w-full h-48 object-cover" />
                    <div className="px-4 py-3">
                        <h2 className="text-xl font-semibold text-gray-800">Product 1</h2>
                        <p className="text-gray-600">$9.99</p>
                        <p className="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Link to={'/product-details'} className="btn btn-active btn-ghost w-full mt-4 text-white">View Details</Link>
                    </div>
                </div>
                <div className="max-w-sm mx-auto bg-white rounded-md shadow-md overflow-hidden">
                    <img src="https://via.placeholder.com/200" alt="Product 1" className="w-full h-48 object-cover" />
                    <div className="px-4 py-3">
                        <h2 className="text-xl font-semibold text-gray-800">Product 1</h2>
                        <p className="text-gray-600">$9.99</p>
                        <p className="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Link to={'/product-details'} className="btn btn-active btn-ghost w-full mt-4 text-white">View Details</Link>
                    </div>
                </div>
                <div className="max-w-sm mx-auto bg-white rounded-md shadow-md overflow-hidden">
                    <img src="https://via.placeholder.com/200" alt="Product 1" className="w-full h-48 object-cover" />
                    <div className="px-4 py-3">
                        <h2 className="text-xl font-semibold text-gray-800">Product 1</h2>
                        <p className="text-gray-600">$9.99</p>
                        <p className="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Link to={'/product-details'} className="btn btn-active btn-ghost w-full mt-4 text-white">View Details</Link>
                    </div>
                </div>
                <div className="max-w-sm mx-auto bg-white rounded-md shadow-md overflow-hidden">
                    <img src="https://via.placeholder.com/200" alt="Product 1" className="w-full h-48 object-cover" />
                    <div className="px-4 py-3">
                        <h2 className="text-xl font-semibold text-gray-800">Product 1</h2>
                        <p className="text-gray-600">$9.99</p>
                        <p className="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Link to={'/product-details'} className="btn btn-active btn-ghost w-full mt-4 text-white">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;