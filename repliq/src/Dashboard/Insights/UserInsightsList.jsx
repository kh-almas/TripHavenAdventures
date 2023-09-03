import React, {useState, useEffect, useContext} from 'react';
import {Link} from "react-router-dom";
import Swal from "sweetalert2";
import {AuthContext} from "../../Provider/AuthProvider.jsx";

const AdminPlaceList = () => {
    const [insights, setInsights] = useState([])
    const [isDeleted, setIsDeleted] = useState(false);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/insights/${user?.phoneNumber}`)
            .then(res => res.json())
            .then(data => {
                setInsights(data);
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

    const removeInsights = id => {
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
                fetch(`${import.meta.env.VITE_BASE_URL}/insights/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data.deletedCount){
                            swalWithBootstrapButtons.fire(
                                'Deleted!',
                                'Place info has been deleted.',
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
        <>
            <div>
                <Link to={'/dashboard/insights/create'} className="btn btn-accent text-white mb-5">create</Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Place Name</th>
                        <th>Insights</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        insights?.map((info, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{info?.placeName}</td>
                                <td>{info?.insights}</td>
                                <td>
                                    <button onClick={() => removeInsights(info?._id)} className="btn btn-ghost btn-xs">remove</button>
                                    <Link to={`/dashboard/insights/update/${info?._id}`} className="btn btn-ghost btn-xs">Update</Link>
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

export default AdminPlaceList;