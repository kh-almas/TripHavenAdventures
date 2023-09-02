import React, {useEffect, useState} from 'react';
import Swal from "sweetalert2";

const SubscriberList = () => {
    const [subscribers, setSubscribers] = useState([]);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_BASE_URL}/all-subscriber`)
            .then(res => res.json())
            .then(data => {
                setSubscribers(data)
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
                        <th>email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        subscribers?.map((info, index) =>
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{info?.email}</td>
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default SubscriberList;