import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext/AuthContext';
import { MdAddShoppingCart, MdCancel, MdDashboard, MdFavoriteBorder, MdLogout, MdSearch } from "react-icons/md";

const Navbar = () => {


    const [isDwear, setIsDawer] = useState(false);
    const { user, lotOut } = useContext(AuthContext);

    const handelLogOut = () => {
        lotOut()
            .then(() => {
                setIsDawer(false)
            })
            .catch(error => console.log(error))
    }

    // const { pathname } = useLocation();
    const menuItem =
        <>
            <li>
                <Link className='hover:bg-cyan-400 font-semibold transition-all rounded-lg' to="/">Home</Link>
            </li>

            <li>
                <Link className='hover:bg-cyan-400 font-semibold transition-all rounded-lg' to="/allwatch">All Watch</Link>
            </li>

            <li>
                <Link className='hover:bg-cyan-400 font-semibold transition-all rounded-lg' to="/dashboard/myorder">Dashboard</Link>
            </li>

            <li>
                <Link className='hover:bg-cyan-400 font-semibold transition-all rounded-lg' to="/contact">Contact Us</Link>
            </li>
            <li>
                <Link className='hover:bg-cyan-400 font-semibold transition-all rounded-lg' to="/blog">Blog</Link>
            </li>

        </>

    return (
        <>
            <div className="navbar bg-teal-600 text-white lg:px-5 md:px-6 px-6">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-gray-900">
                            {menuItem}
                        </ul>
                    </div>
                    <div className=" text-xl flex items-center">
                        <Link to='/' className="font-bold text-xl">Watch Resale Stor</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItem}
                    </ul>
                </div>
                <div className="navbar-end">


                    {
                        user?.uid ?
                            <>
                                <div className="avatar">
                                    <div className="w-14 rounded-full ring ring-indigo-500 ring-offset-indigo-600 ring-offset-2">
                                        <img onClick={() => setIsDawer(true)} className='ms-3 w-12 h-12 rounded-full ' src={user?.photoURL} alt="logo" />
                                    </div>
                                </div>

                                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                            </>
                            :
                            <>
                                <Link to="/login" className='btn bg-white text-gray-900 hover:bg-gray-900 hover:text-white border-0 font-semibold mr-3'>Login</Link>
                                <Link to="/singup" className='btn bg-gray-900 text-white hover:bg-white hover:text-gray-900 border-0 font-semibold'>SingUp</Link>
                            </>
                    }

                </div>
            </div>
            {isDwear &&
                <div className={`z-50 absolute w-72 h-[500px] rounded-lg top-0 bottom-0 transition-all bg-gray-900 ${isDwear ? 'right-0' : '-right-80'}`}>
                    <MdCancel onClick={() => setIsDawer(false)} className='w-8 h-8 text-white mr-4 mt-2 ml-auto'></MdCancel>
                    <div className=''>
                        {user &&
                            <div>
                                <div className='cursor-pointer flex  justify-between items-center mt-5 px-4'>
                                    <img className='ms-3 w-12 h-12 rounded-full ' src={user?.photoURL} alt="logo" />
                                    <span className='text-xl mr-2 text-orange-600 font-bold capitalize'>{user?.displayName}</span>
                                </div>
                                <div className='cursor-pointer flex justify-end items-center my-5 bg-gray-800 active:bg-gray-800 transition-all py-2 text-gray-50'>
                                    <Link to="/dashboard" className="font-semibold capitalize mr-4">Dashboard</Link>
                                    <MdDashboard className='w-6 h-6 mr-4'></MdDashboard>
                                </div>

                                <div className='cursor-pointer  flex justify-end items-center my-5 hover:bg-gray-800 transition-all  text-gray-50 py-2'>
                                    <span className="font-semibold capitalize mr-4">Search</span>
                                    <MdSearch className='w-6 h-6 mr-4'></MdSearch>
                                </div>
                                <div className='cursor-pointer py-2 flex justify-end items-center my-5 hover:bg-gray-800 transition-all  text-gray-50'>
                                    <span className="font-semibold capitalize mr-4">Orders</span>
                                    <MdAddShoppingCart className='w-6 h-6 mr-4'></MdAddShoppingCart>
                                </div>
                                <div className='cursor-pointer py-2 flex justify-end items-center my-5 hover:bg-gray-800 transition-all  text-gray-50'>
                                    <span className="font-semibold capitalize mr-4">Wishlist</span>
                                    <MdFavoriteBorder className='w-6 h-6 mr-4'></MdFavoriteBorder>
                                </div>
                                <p className='border-t-2  border-gray-700'></p>
                            </div>
                        }

                    </div>
                    <div className='mt-9'>
                        {user &&
                            <Link to='/login' onClick={handelLogOut} className=' py-2 flex justify-end items-center my-5 hover:bg-gray-800 transition-all  text-orange-600'>
                                <span className="font-semibold capitalize mr-4">LogOut</span>
                                <MdLogout className='w-6 h-6 mr-4'></MdLogout>
                            </Link>
                        }
                    </div>
                </div>
            }
        </>
    );

};

export default Navbar;