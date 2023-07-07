import React, {useEffect, useState} from 'react';
import Swal from "sweetalert2";
import {useParams} from "react-router-dom";

const CustomerDetails = () => {
    const {id} = useParams();
    const [customer, setCustomer] =useState({});
    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/customer/details/${id}`)
            .then(res => res.json())
            .then(data => {
                setCustomer(data);
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
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full sm:w-96">
                <h1 className="text-3xl font-bold mb-4">Customer Information</h1>
                <p className="text-gray-600">ID: {customer._id}</p>
                <p className="text-gray-600">Name: {customer.name}</p>
                <p className="text-gray-600">Phone: {customer.phone}</p>
            </div>
        </div>
    );
};

export default CustomerDetails;