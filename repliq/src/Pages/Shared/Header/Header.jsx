import React, { useContext } from "react";
import { BsFillHousesFill } from "react-icons/bs";
import { FaSignInAlt, FaSignOutAlt, FaCommentsDollar } from "react-icons/fa";
import { FiHome } from "react-icons/fi";
import { HiArchiveBox } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider.jsx";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const handelLogout = () => {
    logout()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "You are loged out",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "Something is wrong",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };
  return (
    <div className="navbar bg-base-100 fixed z-50">
      <div className="flex-1">
        <Link to={"/"} className="normal-case text-xl">
          TripHavenAdventures
        </Link>
      </div>
      <div className="flex-none">
        <Link to={"/"} className="flex items-center mr-8">
          <FiHome className="mr-2"></FiHome> Home
        </Link>
        <Link to={"/all-place"} className="flex items-center mr-8">
          <HiArchiveBox className="mr-2"></HiArchiveBox> Places
        </Link>
        <Link to={"/insights"} className="flex items-center mr-8">
          <FaCommentsDollar className="mr-2"></FaCommentsDollar> Insights
        </Link>
         {user ? (
        <>
          <Link to={"/dashboard"} className="flex items-center mr-8">
            <BsFillHousesFill className="mr-2"></BsFillHousesFill> Dashboard
          </Link>
          <button
            onClick={() => handelLogout()}
            className="flex items-center mr-8"
          >
            <FaSignOutAlt className="mr-2"></FaSignOutAlt>Logout
          </button>
        </>
         ) : (
        <>
          <Link to={"/login"} className="flex items-center mr-8">
            <FaSignInAlt></FaSignInAlt> Login
          </Link>
        </>
         )}
      </div>
    </div>
  );
};

export default Header;
