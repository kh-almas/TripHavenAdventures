import React, {useEffect, useState} from 'react';
import Swal from "sweetalert2";
import {useParams} from "react-router-dom";

const UserDetails = () => {
    const {id} = useParams();
    const [user, setUser] =useState({});
    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/user/details/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUser(data);
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
                <h1 className="text-3xl font-bold mb-4">User Information</h1>
                <p className="text-gray-600">ID: {user._id}</p>
                <p className="text-gray-600">Role: {user.role}</p>
                <p className="text-gray-600">Phone: {user.phoneNumber}</p>
            </div>
        </div>
    );
};

export default UserDetails;