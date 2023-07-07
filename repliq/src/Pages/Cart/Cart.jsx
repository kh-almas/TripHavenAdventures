import React from 'react';

const Cart = () => {
    return (
        <div className="overflow-x-auto pt-20 px-12" >
            <table className="table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>
                            1
                        </th>
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Zemlak, Daniel and Leannon
                        </td>
                        <td>Purple</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">view</button>
                            <button className="btn btn-ghost btn-xs">remove</button>
                        </th>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Cart;