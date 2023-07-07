import React, {useContext, useEffect, useState} from 'react';
import Swal from "sweetalert2";
import {AuthContext} from "../../Provider/AuthProvider.jsx";
import {useNavigate} from "react-router-dom";

const Cart = () => {
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const [cartItem, setCartItem] = useState([])
    const [isDeleted, setIsDeleted] = useState(false);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/cart/${user.phoneNumber}`)
            .then(res => res.json())
            .then(data => setCartItem(data))
            .catch(e => {
                console.log(e);
                Swal.fire({
                    position: 'top-end',
                    icon: 'info',
                    title: 'Something is wrong',
                    showConfirmButton: false,
                    timer: 1500
                })
            })
    }, [isDeleted])

    const removeCartProduct = id => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_BASE_URL}/cart/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data.deletedCount){
                            swalWithBootstrapButtons.fire(
                                'Deleted!',
                                'Item removed from cart',
                                'success'
                            )
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

            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    }

    const orderNow = () => {
        fetch(`${import.meta.env.VITE_BASE_URL}/order`, {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartItem),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.insertedCount){
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Successfully placed order.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/all-product', { replace: true });
                }
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
    }

    return (
        <div className="px-12 pt-20">
            <div className="mb-8 flex justify-end">
                <button onClick={() => orderNow()} className="btn btn-success text-white">BUY NOW</button>
            </div>
            <div className="overflow-x-auto" >
                <table className="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>product Image</th>
                        <th>name</th>
                        <th>Price</th>
                        <th>Weight</th>
                        <th>Dimensions</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        cartItem?.map((item, index) =>
                            <tr key={index}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src="https://via.placeholder.com/400" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.weight}</td>
                                <td>{item.dimensions}</td>
                                <th>
                                    <button onClick={() => removeCartProduct(item._id)} className="btn btn-ghost btn-xs">remove</button>
                                </th>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;