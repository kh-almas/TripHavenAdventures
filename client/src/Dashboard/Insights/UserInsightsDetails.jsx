import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Swal from "sweetalert2";
import {useForm} from "react-hook-form";
import {AuthContext} from "../../Provider/AuthProvider.jsx";

const AdminPlaceDetails = () => {
    const {id} = useParams();
    const {user} = useContext(AuthContext);
    const [insights, setInsights] =useState({});
    const [update, setUpdate] =useState(false);
    const { register, handleSubmit,reset, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/insights/details/${id}`)
            .then(res => res.json())
            .then(data => {
                setInsights(data);
                console.log(data);
                reset();
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
    }, [update])


    const onSubmit = (data) => {
        // console.log(data);
        data.sellerNumber = user.phoneNumber;
        fetch(`${import.meta.env.VITE_BASE_URL}/insights/update/${id}`, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Insights Updated',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setUpdate(!update)
                    // navigate('/dashboard/place', { replace: true });
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
                <h2 className="text-2xl font-bold mb-4">Update Insights</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Place Name:
                    </label>
                    <input type="text" defaultValue={insights?.placeName} {...register('placeName' )} className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}                    />
                    {errors.placeName && (<p className="text-red-500 text-xs mt-1">Place name is required</p>)}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Insights:
                    </label>
                    <textarea defaultValue={insights?.insights} className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.insights ? 'border-red-500' : ''}`} rows={12}
                              {...register('insights')}
                    ></textarea>
                    {errors.insights && (<p className="text-red-500 text-xs mt-1">History is required</p>)}
                </div>
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Update</button>
                </div>
            </form>
        </div>
    );
};

export default AdminPlaceDetails;