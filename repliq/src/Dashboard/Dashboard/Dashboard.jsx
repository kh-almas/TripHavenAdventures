import React from 'react';

const Dashboard = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="max-w-md px-6 py-8 bg-white shadow-md rounded-md">
                <h2 className="text-3xl font-bold mb-4">Welcome to the Dashboard</h2>
                <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <ul className="list-disc pl-6">
                    <li className="mb-2">Admin can add customers</li>
                    <li className="mb-2">Admin can show customer information</li>
                    <li className="mb-2">Admin can remove a customer</li>
                    <li className="mb-2">Admin can manage orders</li>
                    <li className="mb-2">Admin can view orders</li>
                    <li className="mb-2">Admin can add products</li>
                    <li className="mb-2">Admin can show product information</li>
                    <li className="mb-2">Admin can remove a product</li>
                    <li className="mb-2">Website made with React</li>
                    <li className="mb-2">Styled with Tailwind CSS and DaisyUI</li>
                </ul>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default Dashboard;