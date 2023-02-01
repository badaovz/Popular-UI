import React, { useState } from 'react';
import './index.css';

const Filter = ({ categories, handleFilter, filValue }) => {
    console.log('FilValue: ', filValue);
    return (
        <div className='filter'>
            {categories.map((i) => {
                return (
                    <button
                        key={i}
                        className={`btn small ${
                            i === filValue ? 'active' : ''
                        }`}
                        data-category={i}
                        onClick={(e) => handleFilter(e, i)}
                    >
                        {i}
                    </button>
                );
            })}
        </div>
    );
};

export default Filter;
