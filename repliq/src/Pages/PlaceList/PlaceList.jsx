import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Swal from "sweetalert2";
import productDemoImage from "../../assets/demo/demoProduct.webp";

const PlaceList = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/all-place`)
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(e => {
                console.log(e);
                Swal.fire({
                    position: 'top-end',
                    icon: 'info',
                    title: 'Something is wrong',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }, [])

    return (
        <div className="container mx-auto py-8 pt-20">
            <h1 className="text-3xl font-bold mb-8">Places</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {
                    products?.map((info, index) =>
                        <div key={index} className="max-w-sm mx-auto bg-white rounded-md shadow-md overflow-hidden w-full">
                            <img src={productDemoImage} alt="Product 1" className="w-full h-48 object-cover" />
                            <div className="px-4 py-3">
                                <p>Category: {info.category}</p>
                                <h2 className="text-xl font-semibold text-gray-800">{info?.placeName?.length > 25 ? `${info?.placeName?.slice(0, 25)} ...` : info?.placeName}</h2>
                                <p className="text-gray-600">Weather: {info?.weather?.length > 50 ? `${info?.weather?.slice(0, 50)} ...` : info?.weather}</p>
                                <p className="text-gray-700 mt-2">History: {info?.history?.length > 75 ? `${info?.history?.slice(0, 75)} ...` : info?.history}</p>
                                <Link to={`/place-details/${info?._id}`} className="btn btn-active btn-accent w-full mt-4 text-white">View Details</Link>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default PlaceList;