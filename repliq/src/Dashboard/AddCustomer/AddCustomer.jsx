import React from 'react';
import {useForm} from "react-hook-form";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";

const AddCustomer = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        fetch(`${import.meta.env.VITE_BASE_URL}/customers`, {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.upsertedCount){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Customer Created',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/dashboard/customer', { replace: true });
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
    };

    return (
        <>
            <div className="w-full">
                <h1 className="text-3xl font-bold mb-4">Add customer</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" className="mt-1 p-2 border rounded-md w-full"{...register('name', { required: 'Name is required' })}/>
                        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input type="text" id="phone" className="mt-1 p-2 border rounded-md w-full"{...register('phone', { required: 'Phone Number is required' })}/>
                        {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="text" id="password" className="mt-1 p-2 border rounded-md w-full"{...register('password', { required: 'Password is required' })}/>
                        {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                    </div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Register
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddCustomer;