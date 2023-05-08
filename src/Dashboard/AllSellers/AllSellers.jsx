import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import Table from '../Common/Table';

const AllSellers = () => {
    useTitle('All-Seller')
    const [sellers, setSellers] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/users/get-users/seller`).then(res => {
            setSellers(res.data);
        }).catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h2 className="text-3xl text-cyan-500 font-semibold text-center mb-6 ">All Seller</h2>
            <div className="overflow-x-auto">
                <Table data={sellers} />
            </div>

        </div>
    );
};

export default AllSellers;