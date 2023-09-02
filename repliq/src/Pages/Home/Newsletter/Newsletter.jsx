import React from 'react';
import {useForm} from "react-hook-form";
import Swal from "sweetalert2";

const Newsletter = () => {
    const {register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        fetch(`${import.meta.env.VITE_BASE_URL}/subscriber`, {
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
                        title: 'We will sent mail about offer',
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
        <div>
            <div className="w-1/3 mx-auto">
                <h2 className="text-4xl font-bold text-center mt-8 mb-12 border-b-4 pb-4">Newsletter</h2>
            </div>
            <div className="lg:w-2/3 mx-auto mb-12">
                <form onSubmit={handleSubmit(onSubmit)} className="border border-5 p-12 mb-12">
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" {...register('email', {required: "Email is required"})} className="mt-1 p-2 border rounded-md w-full"/>
                        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </div>
                    <div>
                        <button type="submit" className="btn btn-active btn-accent text-white w-full">Send my offer</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;