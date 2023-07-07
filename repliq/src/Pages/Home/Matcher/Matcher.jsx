import React from 'react';

const Matcher = () => {
    return (
        <div>
            <div className="w-1/3 mx-auto">
                <h2 className="text-4xl font-bold text-center mt-8 mb-12 border-b-4 pb-4">Let us know for better results</h2>
            </div>
            <div className="lg:w-2/3 mx-auto mb-12">
                <div className="flex justify-between items-center border border-5 p-12 mb-12">
                    <div>
                        <h4 className="text-xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
                        <p>Find out with our new tool!</p>
                    </div>
                    <div>
                        <button className="btn btn-error text-white">Check your match</button>
                    </div>
                </div>
                <div className="lg:flex items-center">
                    <div className="lg:1/2">
                        <img className="w-full" src="https://images1.content-hci.com/hca-cont/img/closed_cbf.jpg" alt="img"/>
                    </div>
                    <div className="lg:1/2 lg:pl-8">
                        <h4 className="text-xl font-semibold mb-4">Lorem ipsum dolor sit amet.</h4>
                        <p className="mb-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam blanditiis eius eveniet hic nulla quae qui ratione ut vel!</p>
                        <button className="btn btn-error text-white">Help me to choose</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Matcher;