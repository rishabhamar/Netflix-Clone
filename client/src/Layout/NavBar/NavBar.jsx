import React from "react";
import {Link,NavLink} from 'react-router-dom';
import { FaHeart, FaSearch } from "react-icons/fa";
import { CgUser } from 'react-icons/cg'
import { useSelector } from "react-redux";


function NavBar(){
    const {userInfo} = useSelector(
        (state) => state.userLogin
    );
        const hover = "hover:text-subMain transitions text-white";
        const Hover = ({isActive}) => (isActive ? 'text-subMain' : hover);
    return (
    <>
        <div className="bg-main shadow-md sticky top-0 z-20 flex items-center">
            <div className="container mx-15 py-1 px-10 lg:grid gap-20 grid-cols-8 justify-between items-center ">
                {/* Logo */}
                <div className="col-span-2 lg:block hidden px-5">
                    <Link to="/">
                        <img 
                            src="/youtube logo.png" 
                            alt="logo" 
                            className="w-35 h-16 object-contain" 
                        />
                    </Link>
                </div>
                {/* search form */}
                    <div className="col-span-4 p-2">
                        <form className="w-full text-sm bg-dryGray rounded flex-btn gap-4 h-10">
                           <button className="bg-subMain w-10 flex-colo h-10 rounded text-white">
                                <FaSearch />
                           </button>
                           <input type="text" placeholder="Type to Search" className="font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black" />
                        </form>
                    </div>
                {/* menus */}
                    <div className="col-span-2 font-bold text-lg hidden xl:gap-20 2xl:gap-20 justify-end lg:flex xl:justify-end items-center p-2">
                        <NavLink to="/movies" className={Hover}>
                            Movies
                        </NavLink>
                        <NavLink to={userInfo?.isAdmin ? "/dashboard" : userInfo ? "/profile" : "/login"} className={Hover}>
                            {
                                userInfo ? (
                                    <img src={userInfo?.image ? userInfo?.image:"/images/youtube logo.png"} alt={userInfo?.fullName} className="w-10 h-10 rounded-full border object-cover border-subMain"/>
                                )
                                :
                                <CgUser className="w-10 h-10" />
                            }
                        </NavLink>
                        <NavLink to="/favorites" className={Hover}>
                            <div className="relative">
                            <FaHeart className="w-6 h-6" />
                                <div className="w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-3 -right-3">
                                    3
                                </div>  
                            </div>
                        </NavLink>
                    </div>
            </div>
        </div>
    </>
    );
}

export default NavBar;