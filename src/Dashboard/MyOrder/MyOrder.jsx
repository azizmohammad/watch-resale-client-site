import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import useTitle from '../../Hooks/useTitle';
import useUser from '../../Hooks/useUser';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const MyOrder = () => {
    const auth = useUser();
    useTitle('My-Order')
    const { user } = useContext(AuthContext);
    const [orders, setOrders] = useState([])
    const [paymentMode, setPaymentMode] = useState('');

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/orders/my-orders/${user?.uid}/${auth?.role}`).then(res => {
            setOrders(res.data)
        }).catch(err => console.log(err))
    }, [user, auth])

    // handle payment
    const handlePaymentSuccess = ({ id: stripeToken, type }, id) => {
        axios.patch(`${process.env.REACT_APP_SERVER_URL}/orders/update-order/${id}`, {
            payment: stripeToken
        }).then(res => {
            if (res.data?._id) {
                const updatedOrders = orders.map(order => {
                    if (order?._id === res.data?._id) {
                        order.payment = res.data.payment
                    }

                    return order;
                })
                setOrders(updatedOrders);
                setPaymentMode('');
            }
        }).catch(err => console.log(err))
    };
    return (
        <div>
            <h2 className="text-3xl text-cyan-500 font-semibold text-center mb-6 ">My Order</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr className='text-center'>
                            <th>Id</th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>price</th>
                            <th>Payment</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody className='w-full'>

                        {orders?.length > 0 && orders?.map((order, idx) => (
                            <><tr key={order._id} className='text-center'>
                                <th>{idx + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-16 rounded-full">
                                            <img src={order?.product.picture} alt="" />
                                        </div>
                                    </div>
                                </td>
                                <td>{order.product.productName}</td>
                                <td>{order.product.resalePrice}</td>
                                <td><button onClick={() => setPaymentMode(order?._id)} className='btn btn-primary btn-sm text-white' disabled={order?.payment}>{order?.payment ? 'Paid' : 'Pay'}</button></td>
                                <td><button className='btn btn-sm bg-red-600 text-white border-transparent'>Delete</button></td>
                            </tr>
                                {paymentMode === order?._id && (
                                    <div className="bg-black/50 fixed top-0 left-0 right-0 bottom-0 h-full z-50 flex items-center justify-center w-full">
                                        <div className="w-1/3 bg-white p-5 rounded-md">
                                            <div className='flex items-center justify-between gap-5'>
                                                <h3 className="text-lg font-bold mb-5">{order?.product?.productName}</h3>
                                                <label onClick={() => setPaymentMode('')} className="btn btn-sm btn-circle text-black">✕</label>
                                            </div>
                                            <div className="mt-5 border bg-white rounded-lg p-5 w-full">
                                                <ProcessPayment id={order?._id} handlePayment={handlePaymentSuccess} />
                                            </div>

                                        </div>
                                    </div>
                                )}
                            </>
                        ))}


                    </tbody>
                </table>
            </div>

        </div >
    );
};

export default MyOrder;