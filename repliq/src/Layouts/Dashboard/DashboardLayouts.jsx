import React, {useContext} from 'react';
import {Link, Outlet} from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { HiArchiveBox } from "react-icons/hi2";
import { BsFillHousesFill } from "react-icons/bs";
import { FaCreativeCommonsBy } from "react-icons/fa";
import { FaLuggageCart } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import {AuthContext} from "../../Provider/AuthProvider.jsx";
import Swal from "sweetalert2";

const DashboardLayouts = () => {
    const {user, logout} = useContext(AuthContext);
    const handelLogout = () =>{
        logout()
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'You are loged out',
                    showConfirmButton: false,
                    timer: 1500
                })
            }).catch((error) => {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: 'Something is wrong',
                showConfirmButton: false,
                timer: 1500
            })
        });
    }
    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
                    <div className="mx-8 my-4">
                        <Outlet />
                    </div>
                </div>
                <div className="drawer-side  overflow-scroll">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <div className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        <ul>
                            <li><Link to={'/dashboard'} ><BsFillHousesFill></BsFillHousesFill> Home</Link></li>
                            <li><Link to={'/dashboard/customer'} > <FaCreativeCommonsBy></FaCreativeCommonsBy> Customers</Link></li>
                            <li><Link to={'/dashboard/order'} ><FaLuggageCart></FaLuggageCart> Order</Link></li>
                            <li><Link to={'/dashboard/product'} ><HiArchiveBox></HiArchiveBox> Product</Link></li>
                        </ul>
                        <div className="divider"></div>
                        <ul>
                            <li><Link to={'/'} ><FiHome></FiHome> Home</Link></li>
                            <li><Link to={'/all-product'} ><HiArchiveBox></HiArchiveBox> All Product</Link></li>
                        </ul>
                        <div className="divider"></div>
                        <button onClick={handelLogout} className="mr-4 flex items-center"><FaSignOutAlt className="mr-2"></FaSignOutAlt>Logout</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashboardLayouts;