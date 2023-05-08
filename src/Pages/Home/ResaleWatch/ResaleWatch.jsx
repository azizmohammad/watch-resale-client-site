import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductItem from './ProductItem';

const ResaleWatch = () => {
    const [category, setCategory] = useState('all')
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/categories/get-all`)
            .then(res => {
                setCategories(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/products/get-all`).then(res => {
            setProducts(res.data);
        }).catch(err => console.log(err))
    }, [])


    return (
        <>
            <h2 className='capitalize text-4xl text-gray-900 px-5 font-bold mb-6 md:my-8'> Watch Category</h2>

            <div className='flex items-center justify-between gap-10 flex-wrap mx-5'>
                <button onClick={() => setCategory('all')} className={`btn btn-outline  text-white font-bold mb-6 md:my-8 ${category === 'all' ? 'bg-blue-600' : 'bg-secondary'} text-center py-2`}>All</button>
                {categories?.map(category => (
                    <button onClick={() => setCategory(category?._id)} key={category?._id} className={`btn btn-outline text-white font-bold mb-6 md:my-8 text-center py-2 bg-secondary`}>{category?.name}</button>
                ))}
            </div>

            <div className='grid grid-cols-3 gap-6 md:gap-4 lg:px-5 mx-auto'>

                {products?.filter(item => category === 'all' ? true : item.category === category).slice(0, 3).map(product => (
                    <ProductItem key={product?._id} product={product} />
                ))}

            </div>

            <div className='flex justify-center items-center mt-10'>
                <Link to='/allwatch' className="btn mx-auto bg-secondary text-white border-0 ">See All Watch</Link>
            </div>

        </>
    );
};

export default ResaleWatch;
