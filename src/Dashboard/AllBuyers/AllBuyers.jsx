import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import Table from '../Common/Table';

const AllBuyers = () => {
    useTitle('All-Buyer')
    const [buyers, setBuyers] = useState([]);

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_URL}/users/get-users/buyer`).then(res => {
            setBuyers(res.data);
        }).catch(err => console.log(err))
    }, [])
    return (
        <div>
            <h2 className="text-3xl text-cyan-500 font-semibold text-center mb-6 ">All Buyers</h2>

            <div className="overflow-x-auto">
                <Table data={buyers} />
            </div>

        </div>
    );
};

export default AllBuyers;