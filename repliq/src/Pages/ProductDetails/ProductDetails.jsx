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
                console.log(data)
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
        place.userName = user.displayName || '';
        place.userEmail = user.email || '';
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
                        title: 'Add to favourite',
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
                    <div className="md:flex">
                        <div className="md:flex-shrink-0 flex justify-center items-center">
                            <img src={productDemoImage} alt="Wireless Bluetooth Headphones" className="h-64 w-full object-cover md:w-64"/>
                        </div>
                        <div className="p-6">
                            <p className="text-gray-600">Category: {place.category}</p>
                            <h2 className="text-3xl font-semibold text-gray-800">{place.placeName}</h2>
                            <p className="text-gray-600">Location: {place.location}</p>
                            <p className="text-gray-600">History: {place.history}</p>
                            <p className="text-gray-700 mt-4">
                                Description: {place.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;