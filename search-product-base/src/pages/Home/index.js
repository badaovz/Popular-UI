import React from 'react';
import { useAppContext } from '../../contexts/context';
import ProductItem from '../../components/ProductItem';
import './index.css';
import DefaultLayout from '../DefaultLayout';
import SearchForm from '../../components/SearchForm';

const Home = () => {
    const { products, loading } = useAppContext();
    return (
        <DefaultLayout>
            <SearchForm />
            <div className='home'>
                <h4 className='home__title'>Cocktails</h4>
                {loading ? (
                    <div className='loading'></div>
                ) : (
                    <div className='home__wrapper'>
                        {products.map((product, index) => (
                            <ProductItem {...product} key={index} />
                        ))}
                    </div>
                )}
            </div>
        </DefaultLayout>
    );
};

export default Home;
