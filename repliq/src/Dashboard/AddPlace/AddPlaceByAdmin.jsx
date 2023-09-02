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
        fetch(`${import.meta.env.VITE_BASE_URL}/place`, {
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
                        title: 'Place Created',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/dashboard/place', { replace: true });
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
                <h2 className="text-2xl font-bold mb-4">Add Place</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Category/Type:
                    </label>
                    <select className="select select-bordered w-full" {...register('category', { required: true })}>
                        <option value={"Historical Sites"}>Historical Sites</option>
                        <option value={"Natural Parks and Reserves"}>Natural Parks and Reserves</option>
                        <option value={"Museums and Art Galleries"}>Museums and Art Galleries</option>
                        <option value={"Beaches and Coastal Areas"}>Beaches and Coastal Areas</option>
                        <option value={"Mountains and Hill Stations"}>Mountains and Hill Stations</option>
                        <option value={"Zoos and Wildlife Sanctuaries"}>Zoos and Wildlife Sanctuaries</option>
                        <option value={"Religious Places"}>Religious Places</option>
                        <option value={"Lakes and Rivers"}>Lakes and Rivers</option>
                        <option value={"Archaeological Sites"}>Archaeological Sites</option>
                        <option value={"Waterfalls"}>Waterfalls</option>
                    </select>
                    {errors.category && (<p className="text-red-500 text-xs mt-1">Category is required</p>)}
                </div>
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
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                        Location:
                    </label>
                    <input className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.location ? 'border-red-500' : ''}`} type="text"
                        {...register('location', { required: true })}
                    />
                    {errors.location && (<p className="text-red-500 text-xs mt-1">Location is required</p>)}
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                        Best Time to Visit::
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                                    from:
                                </label>
                                <input className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.from ? 'border-red-500' : ''}`} type="date"
                                       {...register('from', { required: true })}
                                />
                                {errors.from && (<p className="text-red-500 text-xs mt-1">Date is required</p>)}
                            </div>
                        </div>
                        <div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                                    To:
                                </label>
                                <input  className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.to ? 'border-red-500' : ''}`} type="date"
                                       {...register('to', { required: true })}
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
                    <input className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.attraction ? 'border-red-500' : ''}`} type="text"
                        {...register('attraction', { required: true })}
                    />
                    {errors.attraction && (<p className="text-red-500 text-xs mt-1">Attraction is required</p>)}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description:
                    </label>
                    <textarea className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.description ? 'border-red-500' : ''}`} rows={4}
                        {...register('description', { required: true })}
                    ></textarea>
                    {errors.description && (<p className="text-red-500 text-xs mt-1">Description is required</p>)}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        History:
                    </label>
                    <textarea className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.history ? 'border-red-500' : ''}`} rows={4}
                        {...register('history', { required: true })}
                    ></textarea>
                    {errors.history && (<p className="text-red-500 text-xs mt-1">History is required</p>)}
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                        Activities:
                    </label>
                    <input className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.activities ? 'border-red-500' : ''}`} type="text"
                           {...register('activities', { required: true })}
                    />
                    {errors.activities && (<p className="text-red-500 text-xs mt-1">Activities is required</p>)}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brand">
                        Weather:
                    </label>
                    <input  className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.weather ? 'border-red-500' : ''}`} type="text"
                           {...register('weather', { required: true })}
                    />
                    {errors.weather && (<p className="text-red-500 text-xs mt-1">Weather is required</p>)}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Safety Tips::
                    </label>
                    <textarea className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.tips ? 'border-red-500' : ''}`} rows={4}
                              {...register('tips', { required: true })}
                    ></textarea>
                    {errors.tips && (<p className="text-red-500 text-xs mt-1">Tips is required</p>)}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Image:
                    </label>
                    <input type="file" {...register('image')} className={`file-input file-input-bordered w-full ${errors.tips ? 'border-red-500' : ''}`} />
                    {/*{errors.image && (<p className="text-red-500 text-xs mt-1">Image is required</p>)}*/}
                    {/*{...register('image', { required: true })}*/}
                </div>
                <div>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddPlaceByAdmin;