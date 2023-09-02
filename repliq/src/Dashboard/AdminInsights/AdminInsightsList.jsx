import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import Swal from "sweetalert2";

const InsightsList = () => {
    const [insights, setInsights] = useState([])
    const [isDeleted, setIsDeleted] = useState(false);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/all-insights`)
            .then(res => res.json())
            .then(data => setInsights(data))
            .catch(e => {
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
                                'Insights been deleted.',
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
            <div className="mb-4">
                <h3 className="text-3xl">Manage Insight</h3>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Place Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        insights?.map((info, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{info?.placeName}</td>
                                <td>
                                    <button onClick={() => removeInsights(info?._id)} className="btn btn-ghost btn-xs">remove</button>
                                    <Link to={`/dashboard/insights/update/${info?._id}`} className="btn btn-ghost btn-xs">details</Link>
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

export default InsightsList;