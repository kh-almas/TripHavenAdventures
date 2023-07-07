import React from 'react';

const CustomerList = () => {
    return (
        <>
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
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>0111111111111</td>
                            <td><button className="btn btn-ghost btn-xs">remove</button></td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>0111111111111</td>
                            <td><button className="btn btn-ghost btn-xs">remove</button></td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>0111111111111</td>
                            <td><button className="btn btn-ghost btn-xs">remove</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default CustomerList;