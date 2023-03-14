import React from 'react';
import './index.css';
import DefaultLayout from '../DefaultLayout';

const Error = () => {
    return (
        <DefaultLayout>
            <div className='error'>
                <h4 className='error__code'>
                    <span>404</span> not found!
                </h4>
                <p className='error__message'>this page is not match</p>
            </div>
        </DefaultLayout>
    );
};

export default Error;
