import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Swal from "sweetalert2";
import {useForm} from "react-hook-form";
import {AuthContext} from "../../Provider/AuthProvider.jsx";

const AdminPlaceDetails = () => {
    const {id} = useParams();
    const {user} = useContext(AuthContext);
    const [place, setPlace] =useState({});
    const [update, setUpdate] =useState(false);
    const { register, handleSubmit,reset, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/place/details/${id}`)
            .then(res => res.json())
            .then(data => {
                setPlace(data);
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
        fetch(`${import.meta.env.VITE_BASE_URL}/place/update/${id}`, {
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
                        title: 'Place Updated',
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
                <h2 className="text-2xl font-bold mb-4">Update Place</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Category/Type:
                    </label>
                    <select disabled={true} className="select select-bordered w-full">
                        <option value={"Historical Sites"} selected={place.category === "Historical Sites"}>Historical Sites</option>
                        <option value={"Natural Parks and Reserves"} selected={place.category === "Natural Parks and Reserves"}>Natural Parks and Reserves</option>
                        <option value={"Museums and Art Galleries"} selected={place.category === "Museums and Art Galleries"}>Museums and Art Galleries</option>
                        <option value={"Beaches and Coastal Areas"} selected={place.category === "Beaches and Coastal Areas"}>Beaches and Coastal Areas</option>
                        <option value={"Mountains and Hill Stations"} selected={place.category === "Mountains and Hill Stations"}>Mountains and Hill Stations</option>
                        <option value={"Zoos and Wildlife Sanctuaries"} selected={place.category === "Zoos and Wildlife Sanctuaries"}>Zoos and Wildlife Sanctuaries</option>
                        <option value={"Religious Places"} selected={place.category === "Religious Places"}>Religious Places</option>
                        <option value={"Lakes and Rivers"} selected={place.category === "Lakes and Rivers"}>Lakes and Rivers</option>
                        <option value={"Archaeological Sites"} selected={place.category === "Archaeological Sites"}>Archaeological Sites</option>
                        <option value={"Waterfalls"} selected={place.category === "Waterfalls"}>Waterfalls</option>
                    </select>
                    {/*{errors.category && (<p className="text-red-500 text-xs mt-1">Category is required</p>)}*/}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Place Name:
                    </label>
                    <input type="text" defaultValue={place?.placeName} {...register('placeName' )} className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}                    />
                    {errors.placeName && (<p className="text-red-500 text-xs mt-1">Place name is required</p>)}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                        Location:
                    </label>
                    <input defaultValue={place?.location} className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.location ? 'border-red-500' : ''}`} type="text"
                           {...register('location')}
                    />
                    {errors.location && (<p className="text-red-500 text-xs mt-1">Location is required</p>)}
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                        Best Time to Visit:
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                                    from:
                                </label>
                                <input defaultValue={place?.from} className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.from ? 'border-red-500' : ''}`} type="date"
                                       {...register('from')}
                                />
                                {errors.from && (<p className="text-red-500 text-xs mt-1">Date is required</p>)}
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                                    To:
                                </label>
                                <input defaultValue={place?.to} className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.to ? 'border-red-500' : ''}`} type="date"
                                       {...register('to')}
                                />
                                {errors.to && (<p className="text-red-500 text-xs mt-1">Date is required</p>)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                        Attractions:
                    </label>
                    <input defaultValue={place?.attraction} className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.attraction ? 'border-red-500' : ''}`} type="text"
                           {...register('attraction')}
                    />
                    {errors.attraction && (<p className="text-red-500 text-xs mt-1">Attraction is required</p>)}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description:
                    </label>
                    <textarea defaultValue={place?.description} className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.description ? 'border-red-500' : ''}`} rows={4}
                              {...register('description')}
                    ></textarea>
                    {errors.description && (<p className="text-red-500 text-xs mt-1">Description is required</p>)}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        History:
                    </label>
                    <textarea defaultValue={place?.history} className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.history ? 'border-red-500' : ''}`} rows={4}
                              {...register('history')}
                    ></textarea>
                    {errors.history && (<p className="text-red-500 text-xs mt-1">History is required</p>)}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                        Activities:
                    </label>
                    <input defaultValue={place?.activities} className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.activities ? 'border-red-500' : ''}`} type="text"
                           {...register('activities')}
                    />
                    {errors.activities && (<p className="text-red-500 text-xs mt-1">Activities is required</p>)}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand">
                        Weather:
                    </label>
                    <input defaultValue={place?.weather} className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.weather ? 'border-red-500' : ''}`} type="text"
                           {...register('weather')}
                    />
                    {errors.weather && (<p className="text-red-500 text-xs mt-1">Weather is required</p>)}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Safety Tips:
                    </label>
                    <textarea defaultValue={place?.tips} className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.tips ? 'border-red-500' : ''}`} rows={4}
                              {...register('tips')}
                    ></textarea>
                    {errors.tips && (<p className="text-red-500 text-xs mt-1">Tips is required</p>)}
                </div>
                <div className="mb-4">
                    <label {...register('image')} className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Image:
                    </label>
                    <input defaultValue={place?.image} type="file" name={'image'} className={`file-input file-input-bordered w-full`} />
                </div>
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Update</button>
                </div>
            </form>
        </div>
    );
};

export default AdminPlaceDetails;