import React from 'react';


const TrendingWatch = () => {
    return (
        <div>
            <h3 className='capitalize text-4xl text-secondary font-bold mb-6 md:my-8 mt-3 p-4 '> TRENDING WATCHES</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 lg:px-5 bg-blue-300 py-10'>

                <div className="card bg-blue-200 shadow-xl">
                    <div className="px-5 pt-5">
                        <img src="https://i.ibb.co/26tRSJt/img-1.png" alt="Shoes" className=" rounded-xl w-full" />
                    </div>
                    <div className="card-body">
                        <h2 className='text-xl text-black font-bold'>AUDEMARS PIGUET
                            ROYAL OAK OFFSHORE</h2>
                        <h4 className='text-xl text-black font-semibold'>Price: $240</h4>
                        <div className="card-actions">
                            <button className="btn btn-primary">See More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-blue-200 shadow-xl">
                    <div className="px-5 pt-5">
                        <img src="https://i.ibb.co/9WzLH58/img-2.png" alt="Shoes" className=" rounded-xl w-full" />
                    </div>
                    <div className="card-body">
                        <h2 className='text-xl text-black font-bold'>AUDEMARS PIGUET
                            ROYAL OAK OFFSHORE</h2>
                        <h4 className='text-xl text-black font-semibold'>Price: $120</h4>
                        <div className="card-actions">
                            <button className="btn btn-primary">See More</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-blue-200 shadow-xl">
                    <div className="px-5 pt-5">
                        <img src="https://i.ibb.co/BPKmPY1/img-3.png" alt="Shoes" className=" rounded-xl w-full" />
                    </div>
                    <div className="card-body">
                        <h2 className='text-xl text-black font-bold'>AUDEMARS PIGUET
                            ROYAL OAK OFFSHORE</h2>
                        <h4 className='text-xl text-black font-semibold'>Price: $320</h4>
                        <div className="card-actions">
                            <button className="btn btn-primary">See More</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default TrendingWatch;