import React from 'react';

const Table = ({ data }) => {
    return (
        <table className="table w-full">
            <thead>
                <tr className='text-center'>
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>

                {data?.map((item, idx) => (
                    <tr key={item?._id} className='text-center'>
                        <th>{idx + 1}</th>
                        <td>{item?.name}</td>
                        <td>{item?.email}</td>
                        <td><button disabled className='btn btn-sm bg-red-600 text-white border-transparent'>Delete</button></td>
                    </tr>
                ))}

            </tbody>
        </table>
    );
};

export default Table;