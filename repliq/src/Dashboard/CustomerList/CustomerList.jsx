import React, {useEffect, useState} from 'react';
import getCustomerData from "../../Hooks/getCustomerData.jsx";
import {Link} from "react-router-dom";
import Swal from "sweetalert2";

const CustomerList = () => {
    const [customer, setCustomer] = useState([])
    const [isDeleted, setIsDeleted] = useState(false);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/all-customers`)
            .then(res => res.json())
            .then(data => setCustomer(data))
            .catch(e => {
                console.log(e);
            })
    }, [isDeleted])

    const removeCustomer = id => {
        fetch(`${import.meta.env.VITE_BASE_URL}/customers/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Data deleted',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    setIsDeleted(!isDeleted)
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
        <>
            <div>
                <Link to={'/dashboard/customer/create'} className="btn btn-accent text-white mb-5">create</Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        customer?.map((info, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{info.name}</td>
                                <td>{info.phone}</td>
                                <td>
                                    <button onClick={() => removeCustomer(info._id)} className="btn btn-ghost btn-xs">remove</button>
                                    <Link to={`/dashboard/customer/details/${info._id}`} className="btn btn-ghost btn-xs">details</Link>
                                </td>
                            </tr>
                        )
                    }

                    </tbody>
                </table>
            </div>
        </>
    );
};

export default CustomerList;