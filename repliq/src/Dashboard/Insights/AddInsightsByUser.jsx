import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import Swal from "sweetalert2";
import {AuthContext} from "../../Provider/AuthProvider.jsx";

const AddPlaceByAdmin = () => {
    const {user} = useContext(AuthContext);
    const { register, handleSubmit, control, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        data.userPhone = user.phoneNumber;
        fetch(`${import.meta.env.VITE_BASE_URL}/insights`, {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Insights Created',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/dashboard/insights', { replace: true });
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
            <form className="bg-white shadow-md rounded-lg px-8 py-6" onSubmit={handleSubmit(onSubmit)}>
                <h2 className="text-2xl font-bold mb-4">Add Insights</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Place Name:
                    </label>
                    <input className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.placeName ? 'border-red-500' : ''}`} type="text"
                        {...register('placeName', { required: true })}
                    />
                    {errors.placeName && (<p className="text-red-500 text-xs mt-1">Place name is required</p>)}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Insights:
                    </label>
                    <textarea className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.insights ? 'border-red-500' : ''}`} rows={12}
                        {...register('insights', { required: true })}
                    ></textarea>
                    {errors.insights && (<p className="text-red-500 text-xs mt-1">History is required</p>)}
                </div>
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddPlaceByAdmin;