import React from 'react';
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import Swal from "sweetalert2";

const AddProductByAdmin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        fetch(`${import.meta.env.VITE_BASE_URL}/products`, {
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
                        title: 'Product Created',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/dashboard/product', { replace: true });
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
        <div className="">
            <form
                className="bg-white shadow-md rounded-lg px-8 py-6"
                onSubmit={handleSubmit(onSubmit)}
            >
                <h2 className="text-2xl font-bold mb-4">Product Form</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name
                    </label>
                    <input
                        className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            errors.name ? 'border-red-500' : ''
                        }`}
                        type="text"
                        {...register('name', { required: true })}
                    />
                    {errors.name && (
                        <p className="text-red-500 text-xs mt-1">Name is required</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                        Price
                    </label>
                    <input
                        className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            errors.price ? 'border-red-500' : ''
                        }`}
                        type="number"
                        {...register('price', { required: true })}
                    />
                    {errors.price && (
                        <p className="text-red-500 text-xs mt-1">Price is required</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            errors.description ? 'border-red-500' : ''
                        }`}
                        rows={4}
                        {...register('description', { required: true })}
                    ></textarea>
                    {errors.description && (
                        <p className="text-red-500 text-xs mt-1">Description is required</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand">
                        Brand
                    </label>
                    <input
                        className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            errors.brand ? 'border-red-500' : ''
                        }`}
                        type="text"
                        {...register('brand', { required: true })}
                    />
                    {errors.brand && (
                        <p className="text-red-500 text-xs mt-1">Brand is required</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="color">
                        Color
                    </label>
                    <input
                        className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            errors.color ? 'border-red-500' : ''
                        }`}
                        type="text"
                        {...register('color', { required: true })}
                    />
                    {errors.color && (
                        <p className="text-red-500 text-xs mt-1">Color is required</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="weight">
                        Weight
                    </label>
                    <input
                        className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            errors.weight ? 'border-red-500' : ''
                        }`}
                        type="text"
                        {...register('weight', { required: true })}
                    />
                    {errors.weight && (
                        <p className="text-red-500 text-xs mt-1">Weight is required</p>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dimensions">
                        Dimensions
                    </label>
                    <input
                        className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                            errors.dimensions ? 'border-red-500' : ''
                        }`}
                        type="text"
                        {...register('dimensions', { required: true })}
                    />
                    {errors.dimensions && (
                        <p className="text-red-500 text-xs mt-1">Dimensions are required</p>
                    )}
                </div>
                <div>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProductByAdmin;