import React, {useEffect, useState} from 'react';
import productDemoImage from "../../assets/demo/demoProduct.webp";
import { FaArrowRight } from "react-icons/fa";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";

const Insights = () => {
    const [insights, setInsights] = useState([])
    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/all-insights`)
            .then(res => res.json())
            .then(data => setInsights(data))
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
    }, [])
    return (
        <div className="container mx-auto py-8 pt-20">
            <h1 className="text-3xl font-bold mb-8">See Peoples Experience and Their Feelings</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    insights?.map((info, index) =>
                        <div key={index} className="mb-12">
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <div className="mb-3">
                                        <span className="bg-zinc-600 text-white py-1 px-2 rounded">Article</span>
                                    </div>
                                    <h2 className="card-title text-gray-700">{info?.placeName}</h2>
                                    <p className="text-gray-500">{info?.insights?.length > 120 ? `${info?.insights?.slice(0, 120)}...` : info?.insights}</p>
                                    <div className="card-actions">
                                        <Link to={`/insights/details/${info?._id}`} className="flex items-center text-xl font-bold pb-1" style={{borderBottom: "2px solid #000000"}}>More Info <FaArrowRight className="ms-4"></FaArrowRight></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Insights;