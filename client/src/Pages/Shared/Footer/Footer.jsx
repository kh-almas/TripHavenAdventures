import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-100 text-gray-600">
            <div className="container mx-auto py-6 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div>
                        <h3 className="text-lg font-semibold mb-2">About Us</h3>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
                        <p className="text-sm">123 Street, City, Country</p>
                        <p className="text-sm">info@example.com</p>
                        <p className="text-sm">+1234567890</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-600 hover:text-gray-800">Facebook</a>
                            <a href="#" className="text-gray-600 hover:text-gray-800">Twitter</a>
                            <a href="#" className="text-gray-600 hover:text-gray-800">Instagram</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;