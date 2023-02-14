import React from 'react';
import './index.css';

const Item = ({ id, value, handleDel, handleEdit, isEditing }) => {
    return (
        <div className='item'>
            <p className='item__title'>{value}</p>
            <div className='item__control'>
                <button
                    className='item__edit'
                    onClick={(e) => handleEdit(e, id)}
                >
                    <i className='fa-solid fa-pen-to-square'></i>
                </button>
                <button
                    className={`item__del ${isEditing ? 'none' : ''}`}
                    onClick={(e) => handleDel(e, id)}
                >
                    <i className='fa-solid fa-trash'></i>
                </button>
            </div>
        </div>
    );
};

export default Item;
