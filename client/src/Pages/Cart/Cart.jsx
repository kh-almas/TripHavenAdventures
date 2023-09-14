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
            .then(data => {
                console.log(data);
                setCartItem(data);
            })
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
                                'Item removed',
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

    return (
        <div className="px-12 pt-20">
            <div className="overflow-x-auto" >
                <table className="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Category</th>
                        <th>Place name</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        cartItem?.map((item, index) =>
                            <tr key={index}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>{item.category}</td>
                                <td>{item.placeName}</td>
                                <td>
                                    <button onClick={() => removeCartProduct(item._id)} className="btn btn-ghost btn-xs">remove</button>
                                </td>
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