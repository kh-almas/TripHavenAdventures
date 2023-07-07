import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { HiArchiveBox } from "react-icons/hi2";
import { BsFillHousesFill } from "react-icons/bs";
import { FaSignInAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import {AuthContext} from "../../../Provider/AuthProvider.jsx";
import Swal from "sweetalert2";

const Header = () => {
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
        <div className="navbar bg-base-100 fixed">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">REPLIQ</a>
            </div>
            <div className="flex-none">
                <Link to={'/'} className="btn btn-accent text-white mr-3"><FiHome></FiHome> Home</Link>
                <Link to={'/all-product'} className="btn btn-accent text-white mr-3"><HiArchiveBox></HiArchiveBox> All Products</Link>
                <Link to={'/cart'} className="btn btn-accent text-white mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    Cart
                </Link>
                {
                    user ?
                        <>
                            <Link to={'/dashboard'} className="btn btn-accent text-white mr-3"><BsFillHousesFill></BsFillHousesFill> Dashboard</Link>
                            <Link to={'/login'} className="btn btn-accent text-white mr-3"><FaSignOutAlt></FaSignOutAlt>Logout</Link>
                        </>
                        :
                        <>
                            <Link to={'/login'} className="btn btn-accent text-white mr-3"><FaSignInAlt></FaSignInAlt> Login</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Header;