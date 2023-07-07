import React, {useContext, useEffect, useState} from 'react';
import Swal from "sweetalert2";
import {AuthContext} from "../../Provider/AuthProvider.jsx";
import {Link} from "react-router-dom";

const OrderList = () => {
    const [order, setOrder] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/my-product-order/${user.phoneNumber}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setOrder(data)
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
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>User Phone</th>
                        <th>Price</th>
                        <th>Color</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        order?.map((info, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{info?.name}</td>
                                <td>{info?.userPhone}</td>
                                <td>{info?.price}</td>
                                <td>{info?.color}</td>
                                <td>
                                    <Link to={`/dashboard/order/details/${info?._id}`} className="btn btn-ghost btn-xs">details</Link>
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

export default OrderList;