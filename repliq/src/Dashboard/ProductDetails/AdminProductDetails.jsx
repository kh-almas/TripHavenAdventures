import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Swal from "sweetalert2";

const AdminProductDetails = () => {
    const {id} = useParams();
    const [product, setProduct] =useState({});
    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/product/details/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
            })
            .catch(e => {
                console.log(e)
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
        <div className="flex justify-center items-center h-screen">
            <div className="w-full sm:w-96">
                <h1 className="text-3xl font-bold mb-4">Customer Information</h1>
                <p className="text-gray-600">ID: {product?._id}</p>
                <p className="text-gray-600">Name: {product?.name}</p>
                <p className="text-gray-600">price: {product?.price}</p>
                <p className="text-gray-600">brand: {product?.brand}</p>
                <p className="text-gray-600">color: {product?.color}</p>
                <p className="text-gray-600">weight: {product?.weight}</p>
                <p className="text-gray-600">Dimensions: {product?.dimensions}</p>
                <p className="text-gray-600">description: {product?.description}</p>
            </div>
        </div>
    );
};

export default AdminProductDetails;