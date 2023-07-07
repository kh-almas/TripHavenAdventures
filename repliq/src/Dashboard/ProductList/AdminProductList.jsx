import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import Swal from "sweetalert2";

const AdminProductList = () => {
    const [products, setProducts] = useState([])
    const [isDeleted, setIsDeleted] = useState(false);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/all-products`)
            .then(res => res.json())
            .then(data => setProducts(data))
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

    const removeCustomer = id => {
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
                fetch(`${import.meta.env.VITE_BASE_URL}/product/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data.deletedCount){
                            swalWithBootstrapButtons.fire(
                                'Deleted!',
                                'Product has been deleted.',
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
                /* Read more about handling dismissals below */
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
        <>
            <div>
                <Link to={'/dashboard/product/create'} className="btn btn-accent text-white mb-5">create</Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Brand</th>
                        <th>color</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        products?.map((info, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{info?.name}</td>
                                <td>{info?.price}</td>
                                <td>{info?.brand}</td>
                                <td>{info?.color}</td>
                                <td>
                                    <button onClick={() => removeCustomer(info?._id)} className="btn btn-ghost btn-xs">remove</button>
                                    <Link to={`/dashboard/product/details/${info?._id}`} className="btn btn-ghost btn-xs">details</Link>
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

export default AdminProductList;