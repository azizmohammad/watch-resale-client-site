import React from 'react';
import useTitle from '../../../Hooks/useTitle';
import About from '../../About/About';
import Banner from '../Banner/Banner';
import ResaleWatch from '../ResaleWatch/ResaleWatch';
import TrendingWatch from '../TrendingWatch/TrendingWatch';
import ReviewWatch from './ReviewWatch/ReviewWatch';

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <ResaleWatch></ResaleWatch>
            <TrendingWatch></TrendingWatch>
            <ReviewWatch></ReviewWatch>
            <About></About>
        </div>
    );
};

export default Home;