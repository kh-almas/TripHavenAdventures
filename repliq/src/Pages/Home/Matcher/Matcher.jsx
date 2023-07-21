import React from 'react';

const Matcher = () => {
    return (
        <div>
            <div className="w-1/3 mx-auto">
                <h2 className="text-4xl font-bold text-center mt-8 mb-12 border-b-4 pb-4">Newsletter</h2>
            </div>
            <div className="lg:w-2/3 mx-auto mb-12">
                <form className="border border-5 p-12 mb-12">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" className="mt-1 p-2 border rounded-md w-full"/>
                    </div>
                    <div>
                        <button type="submit" className="btn btn-error text-white w-full">Send my offer</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Matcher;