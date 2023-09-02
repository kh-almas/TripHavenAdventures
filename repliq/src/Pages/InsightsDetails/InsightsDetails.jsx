import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {AuthContext} from "../../Provider/AuthProvider.jsx";
import {useForm} from "react-hook-form";
import Swal from "sweetalert2";

const InsightsDetails = () => {
    const {id} = useParams();
    const [insights, setInsights] =useState({});

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/insights/details/${id}`)
            .then(res => res.json())
            .then(data => {
                setInsights(data);
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
        <>
            <div className="container mx-auto py-8 flex justify-center items-center py-20 pt-20">
                <div className="max-w-4xl mx-auto bg-white rounded-md shadow-md overflow-hidden w-full">
                    <div className="">
                        <div className="p-6">
                            <h2 className="text-3xl font-semibold text-gray-800">Place Name: {insights?.placeName}</h2>

                            <div className="mt-4">
                                <p className="font-semibold">Insights Description:</p>
                                <p>{insights?.insights}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InsightsDetails;