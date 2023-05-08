import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import useTitle from '../../Hooks/useTitle';


const ProductAdded = () => {
    useTitle('Add-Product')
    const { user } = useContext(AuthContext);
    console.log(user);

    const [name, setName] = useState('')
    const [resalePrice, setResalePrice] = useState('')
    const [originalPrice, setOriginalPrice] = useState('')
    const [address, setAddress] = useState('')
    const [useProduct, setUseProduct] = useState('')
    const [photourl, setPhotourl] = useState('')
    const [select, setSelect] = useState('')
    const [categories, setCategories] = useState([]);

    const navigate = useNavigate();

    // get categories
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/categories/get-all`).then(res => {
            setCategories(res?.data);
        }).catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            toast.error('Frist Name is required')
        }
        else if (!resalePrice) {
            toast.error('Resale Price required')
        }
        else if (!originalPrice) {
            toast.error('Original Price is required')
        }
        else if (!address) {
            toast.error('Your address is required')
        }
        else if (!useProduct) {
            toast.error('Use product is required')
        }
        else if (!photourl) {
            toast.error('Photo is required')
        }
        else if (!select) {
            toast.error('Seclect is required')
        }
        else if (!categories) {
            toast.error('Your Categoryis required')
        }
        else {
            axios.post(`${process.env.REACT_APP_SERVER_URL}/products/add-product`, {
                productName: name,
                resalePrice,
                originalPrice,
                picture: photourl,
                yearsOfuse: useProduct,
                userId: user?.uid,
                userNmae: user?.displayName,
                userImage: user.photoURL,
                category: select,
                location: address
            }).then(res => {
                toast.success('Product Added Successfully!!')
                navigate('/allwatch')
            }).catch(err => console.log(err))
        }
    }

    return (
        <section className='text-white' >
            <div className="space-y-2 col-span-full lg:col-span-1 text-center mb-5">
                <p className="font-bold text-2xl text-cyan-500 ">Add Product </p>
            </div>
            <form onSubmit={handleSubmit} action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                <fieldset className="p-6 rounded-md shadow-sm bg-gray-900">

                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Name</label>

                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                name='name' type="text" placeholder="name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 input input-bordered" required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Resale price</label>
                            <input
                                value={resalePrice}
                                onChange={(e) => setResalePrice(e.target.value)}
                                name='resalePrice' type="text" placeholder="Resale price" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 input input-bordered" required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Original price</label>

                            <input
                                value={originalPrice}
                                onChange={(e) => setOriginalPrice(e.target.value)}
                                name='originalPrice' type="text" placeholder="Original price" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 input input-bordered" required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Address</label>
                            <input
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                name='address' type="text" placeholder="Address" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 input input-bordered" required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Years of use</label>
                            <input
                                value={useProduct}
                                onChange={(e) => setUseProduct(e.target.value)}
                                name='useProduct' type="text" placeholder="Years of use" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 input input-bordered" required />
                        </div>

                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Photo Url</label>
                            <input
                                value={photourl}
                                onChange={(e) => setPhotourl(e.target.value)}
                                name='photourl' type="text" placeholder="Photo Url" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900 input input-bordered" required />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label className="text-sm">Select Category</label>
                            <select
                                onChange={(e) => setSelect(e.target.value)}
                                name='select' className="select select-primary w-full text-gray-900">

                                <option>Select Category</option>
                                {categories?.length > 0 && categories?.map(category => (
                                    <option key={category._id} value={category._id}>{category.name}</option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <input type="submit" className='btn btn-secondary text-white mt-8 text-center' value="Add Product" />
                    </div>
                </fieldset>

            </form>
        </section>
    );
};

export default ProductAdded;