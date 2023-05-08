import React, { useEffect, useState } from 'react';
import axios from 'axios'
import useTitle from '../../../Hooks/useTitle';
import ProductItem from './ProductItem';

const AllWatch = () => {
    useTitle('All Catch')
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/products/get-all`).then(res => {
            setProducts(res.data);
        }).catch(err => console.log(err))
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 lg:px-5 py-5'>

            {products?.map(product => (
                <ProductItem key={product?._id} product={product} />
            ))}

        </div>
    );
};

export default AllWatch;