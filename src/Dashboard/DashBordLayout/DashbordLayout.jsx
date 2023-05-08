import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useUser from '../../Hooks/useUser';
// import { AuthContext } from '../../context/AuthContext/AuthContext';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

// import useAdmin from '../hooks/useAdmin';
const DashbordLayout = () => {

    const auth = useUser()

    return (
        <div>
            <Navbar></Navbar>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-gray-300 px-5 py-3">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-cayn-600">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-cyan-600 text-white font-semibold">
                        <>
                            {auth?.role === 'buyer' && (
                                <li>
                                    <Link to='/dashboard/myorder'>My Order</Link>

                                </li>
                            )}

                            {auth?.role === "seller" && (
                                <>
                                    <li>
                                        <Link to='/dashboard/allorders'>All Orders</Link>
                                    </li>
                                    <li>
                                        <Link to='/dashboard/myorder'>My Order</Link>
                                    </li>
                                    <li>
                                        <Link to='/dashboard/addcategory'>Add Category</Link>
                                    </li>
                                    <li>
                                        <Link to='/dashboard/addproduct'>Add Product</Link>
                                    </li>
                                </>
                            )}

                            {auth?.role === "admin" && (
                                <>
                                    <li>
                                        <Link to='/dashboard/myorder'>My Order</Link>
                                    </li>
                                    <li>
                                        <Link to='/dashboard/allseller'>All Sellers</Link>
                                    </li>
                                    <li>
                                        <Link to='/dashboard/allbuyer'>All Buyers</Link>
                                    </li>
                                    <li>
                                        <Link to='/dashboard/addcategory'>Add Category</Link>
                                    </li>
                                    <li>
                                        <Link to='/dashboard/addproduct'>Add Product</Link>
                                    </li>
                                </>
                            )}
                        </>
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default DashbordLayout;



