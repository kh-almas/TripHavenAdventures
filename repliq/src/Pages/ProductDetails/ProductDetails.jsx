import React, {useContext, useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import Swal from "sweetalert2";
import {AuthContext} from "../../Provider/AuthProvider.jsx";

const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] =useState({});
    const {user} = useContext(AuthContext);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/product/details/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
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

    const addToCart = product =>{
        delete product._id;
        product.userName = user.displayName || '';
        product.userEmail = user.email || '';
        product.userPhone = user.phoneNumber;

        fetch(`${import.meta.env.VITE_BASE_URL}/cart`, {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(product),
        })
            .then(res => res.json())
            .then(data => {
                if(data.upsertedCount){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Add to cart',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                if(data.matchedCount){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Already added',
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
            <div className="container mx-auto py-8 flex justify-center items-center py-20">
                <div className="max-w-4xl mx-auto bg-white rounded-md shadow-md overflow-hidden w-full">
                    <div className="md:flex">
                        <div className="md:flex-shrink-0 flex justify-center items-center">
                            <img src="https://via.placeholder.com/400" alt="Wireless Bluetooth Headphones" className="h-64 w-full object-cover md:w-64"/>
                        </div>
                        <div className="p-6">
                            <h2 className="text-3xl font-semibold text-gray-800">{product.name}</h2>
                            <p className="text-gray-600">${product.price}</p>
                            <p className="text-gray-700 mt-4">
                                {product.description}
                            </p>
                            <div className="mt-4">
                                <h3 className="text-lg font-semibold text-gray-800">Product Details</h3>
                                <div className="mt-2">
                                    <p className="text-gray-700">
                                        <span className="font-medium">Brand: </span>{product.brand}
                                    </p>
                                    <p className="text-gray-700">
                                        <span className="font-medium">Color: </span>{product.color}
                                    </p>
                                    <p className="text-gray-700">
                                        <span className="font-medium">Weight: </span>{product.weight}
                                    </p>
                                    <p className="text-gray-700">
                                        <span className="font-medium">Dimensions: </span>{product.dimensions}
                                    </p>
                                    <div>
                                        <button onClick={() => addToCart(product)} className="btn btn-accent text-white mt-4">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="max-w-sm mx-auto bg-white rounded-md shadow-md overflow-hidden">
                    <img src="https://via.placeholder.com/200" alt="Product 1" className="w-full h-48 object-cover" />
                    <div className="px-4 py-3">
                        <h2 className="text-xl font-semibold text-gray-800">Product 1</h2>
                        <p className="text-gray-600">$9.99</p>
                        <p className="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Link to={'/product-details'} className="btn btn-active btn-accent w-full mt-4 text-white">View Details</Link>
                    </div>
                </div>
                <div className="max-w-sm mx-auto bg-white rounded-md shadow-md overflow-hidden">
                    <img src="https://via.placeholder.com/200" alt="Product 1" className="w-full h-48 object-cover" />
                    <div className="px-4 py-3">
                        <h2 className="text-xl font-semibold text-gray-800">Product 1</h2>
                        <p className="text-gray-600">$9.99</p>
                        <p className="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Link to={'/product-details'} className="btn btn-active btn-accent w-full mt-4 text-white">View Details</Link>
                    </div>
                </div>
                <div className="max-w-sm mx-auto bg-white rounded-md shadow-md overflow-hidden">
                    <img src="https://via.placeholder.com/200" alt="Product 1" className="w-full h-48 object-cover" />
                    <div className="px-4 py-3">
                        <h2 className="text-xl font-semibold text-gray-800">Product 1</h2>
                        <p className="text-gray-600">$9.99</p>
                        <p className="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Link to={'/product-details'} className="btn btn-active btn-accent w-full mt-4 text-white">View Details</Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetails;