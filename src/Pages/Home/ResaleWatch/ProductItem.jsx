import axios from 'axios';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext/AuthContext';
import toast from 'react-hot-toast';
import moment from 'moment'

const ProductItem = ({ product }) => {
    const { user } = useContext(AuthContext)
    const [phone, setPhone] = useState('');
    const [meetLocation, setMeetLocation] = useState('');
    const [isOpen, setIsOpen] = useState('');
    // handle submit
    const submitHandler = (product) => {
        return (e) => {
            e.preventDefault();

            axios.post(`${process.env.REACT_APP_SERVER_URL}/orders/add-order`, {
                buyerId: user?.uid,
                sellerId: product.userId,
                product: product._id,
                phone,
                meetLocation,
                buyerImage: user.photoURL
            }).then(res => {
                if (res?.data?._id) {
                    toast.success('Order is Placed!!')
                    setPhone('');
                    setMeetLocation('');
                    setIsOpen('')
                }
            }).catch(err => console.log(err))
        }
    }
    return (
        <div key={product?._id} className="card  bg-base-200 shadow-xl">
            <div className="px-5 pt-5">
                <img src={product?.picture} alt="Shoes" className="rounded-xl sm:w-full" />
            </div>
            <div className="card-body items-start text-left">
                <h2 className='text-xl text-black font-bold'>{product?.productName}</h2>
                <h4 className='text-xl text-black'>Resale Price: {product?.resalePrice}</h4>
                <p className='text-xl text-black'>Original Price: {product?.originalPrice}</p>
                <p className='text-xl text-black'>Years Of Use: {product?.yearsOfuse}</p>
                <p className='text-xl text-black'>Publish date: {moment(product?.createdTime).format("MMM Do YY")}</p>
                <p className='text-xl text-black'>Location: {product?.location}</p>

                <div className="card-actions mt-4">
                    <label htmlFor={product?._id} className="btn" onClick={() => setIsOpen(product?._id)}>Buy Now</label>
                    <input type="checkbox" id={product?._id} className="modal-toggle" />
                    {/* {isOpen === product?._id && ( */}
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor={product?._id} className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => setIsOpen('')}>✕</label>
                            <h3 className="text-lg font-bold mb-5">{product?.productName}</h3>

                            <form
                                onSubmit={submitHandler(product)}
                                className='grid grid-cols-1 gap-4'>

                                <input name='name' value={product?.productName} disabled type="text" placeholder="Product Name" className="input input-bordered input-meutral w-full" required />

                                <input name='email' value={user?.email} disabled type="email" placeholder="Your Email" className="input input-bordered input-meutral w-full" required />
                                <input name='number' value={phone} onChange={(e) => setPhone(e.target.value)} type="Number" placeholder="Phone Number" className="input input-bordered input-meutral w-full" required />
                                <textarea value={meetLocation} onChange={(e) => setMeetLocation(e.target.value)} name='mettLocation' type="text" placeholder="Meet Location" className="input input-bordered input-meutral w-full" required />
                                <br />
                                <input className='w-full btn btn-neutral text-center text-white' type="submit" value="ORDER NOW" />
                            </form>
                        </div>
                    </div>
                    {/* )} */}
                </div>
            </div>
        </div>
    );
};

export default ProductItem;