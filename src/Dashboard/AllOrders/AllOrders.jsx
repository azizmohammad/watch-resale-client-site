import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import useTitle from '../../Hooks/useTitle';
import useUser from '../../Hooks/useUser';

const AllOrders = () => {
    const auth = useUser();
    useTitle('All-Order')
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/orders/my-orders/${user?.uid}/${auth?.role}`).then(res => {
            setOrders(res.data)
        }).catch(err => console.log(err))
    }, [user, auth])
    return (
        <div>
            <h2 className="text-3xl text-cyan-500 font-semibold text-center mb-6 ">All Order</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className='text-center'>
                            <th>Id</th>
                            <th>Buyer Image</th>
                            <th>Product Name</th>
                            <th>Location</th>
                            <th>Phone</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>

                        {orders?.length > 0 && orders?.map((order, idx) => (
                            <tr key={order._id} className='text-center'>
                                <th>{idx + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-16 rounded-full">
                                            <img src={order?.buyerImage} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{order.product.productName}</td>
                                <td>{order.meetLocation}</td>
                                <td>{order.phone}</td>
                                <td>{order.payment ? 'Paid' : 'Not Paid'}</td>
                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>

        </div >
    );
};

export default AllOrders;