import React from 'react';
import './index.css';
import { useAppContext } from '../../contexts/context';

const SearchForm = () => {
    console.log('log');
    const { textSearch, setTextSearch } = useAppContext();
    return (
        <div className='search'>
            <h5 className='search__title'>Search Cocktail</h5>
            <input
                type='text'
                value={textSearch}
                onChange={(e) => setTextSearch(e.target.value)}
                className='search__input'
            />
        </div>
    );
};

export default SearchForm;
