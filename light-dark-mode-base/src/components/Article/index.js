import React from 'react';
import './index.css';
import moment from 'moment/moment';

const Article = ({ title, length, date, snippet }) => {
    return (
        <div className='article'>
            <h3 className='article__title'>{title}</h3>
            <p className='article__time'>
                {moment(date).format('dddd do, yyyy')}
                {length} min read
            </p>
            <p className='article__text'>{snippet}</p>
        </div>
    );
};

export default Article;
