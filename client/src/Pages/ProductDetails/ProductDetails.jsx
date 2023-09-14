import React, {useContext, useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import Swal from "sweetalert2";
import {AuthContext} from "../../Provider/AuthProvider.jsx";
import productDemoImage from "../../assets/demo/demoProduct.webp";

const ProductDetails = () => {
    const {id} = useParams();
    const [place, setPlace] =useState({});
    const {user} = useContext(AuthContext);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/place/details/${id}`)
            .then(res => res.json())
            .then(data => {
                setPlace(data);
            })
            .catch(e => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'info',
                    title: 'Something is wrong',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }, [])

    const addToFavourite = place =>{
        delete place._id;
        place.userPhone = user.phoneNumber;

        fetch(`${import.meta.env.VITE_BASE_URL}/favorite`, {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(place),
        })
            .then(res => res.json())
            .then(data => {
                if(data.upsertedCount){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Add to favorite',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                if(data.matchedCount){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Already added in favourite',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            .catch(e => {
                Swal.fire({
                    position: 'top-end',
                    icon: 'info',
                    title: 'Something is wrong',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }

    return (
        <>
            <div className="container mx-auto py-8 flex justify-center items-center py-20 ">
                <div className="max-w-4xl mx-auto bg-white rounded-md shadow-md overflow-hidden w-full  mt-12">
                    <div className="">
                        <div className="md:flex-shrink-0 flex justify-center items-center">
                            <img src={productDemoImage} alt="Wireless Bluetooth Headphones" className="h-64 w-full"/>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-600"><span className="font-semibold">Category:</span> {place.category}</p>
                            <h2 className="text-3xl font-semibold text-gray-800">{place.placeName}</h2>
                            <p className="text-gray-600"><span className="font-semibold">Location:</span> {place.location}</p>
                            <div className="m-4">
                                <h5 className="font-semibold">Best Time to Visit:</h5>
                                <p className="text-gray-600"><span className="font-semibold">From:</span> {place.from}</p>
                                <p className="text-gray-600"><span className="font-semibold">To:</span> {place.to}</p>
                            </div>
                            <p className="text-gray-600"><span className="font-semibold">Attractions:</span> {place.attraction}</p>
                            <p className="text-gray-600"><span className="font-semibold">Description:</span> {place.description}</p>
                            <p className="text-gray-600"><span className="font-semibold">History:</span> {place.history}</p>
                            <p className="text-gray-600"><span className="font-semibold">Activities:</span> {place.activities}</p>
                            <p className="text-gray-600"><span className="font-semibold">Weather:</span> {place.weather}</p>
                            <p className="text-gray-600"><span className="font-semibold">Safety Tips:</span> {place.tips}</p>
                            <p className="text-gray-700 mt-4">
                                <span className="font-semibold">Description:</span> {place.description}
                            </p>
                            {
                                user ?
                                    <div>
                                        <button onClick={() => addToFavourite(place)} className="btn btn-accent text-white mt-4">Add to Favorite</button>
                                    </div> : ''
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;