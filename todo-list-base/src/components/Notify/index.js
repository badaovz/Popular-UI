import React, { useEffect } from 'react';
import './index.css';

const Notify = ({ type, removeNotify, msg, list }) => {
    useEffect(() => {
        let timeout = setTimeout(() => {
            removeNotify();
        }, 3000);

        return () => clearTimeout(timeout);
    }, [list, removeNotify]);

    return <p className={`alert alert-${type}`}>{msg}</p>;
};

export default Notify;
