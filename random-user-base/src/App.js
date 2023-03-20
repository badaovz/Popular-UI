import { useEffect, useState } from 'react';
import {
    FaCalendarCheck,
    FaEnvelopeOpen,
    FaLock,
    FaMap,
    FaPhone,
    FaUserAlt,
} from 'react-icons/fa';

function App() {
    const [user, setUser] = useState();
    const [title, setTitle] = useState('My name is');
    const [value, setValue] = useState('');

    const url = 'https://randomuser.me/api/';
    const fetchData = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            if (data) {
                console.log('Data: ', data);
                const results = data.results[0];
                console.log('Result: ', results);
                const tempUser = {
                    image: results.picture.large,
                    name: results.name.first + ' ' + results.name.last,
                    email: results.email,
                    age: results.dob.age,
                    street:
                        results.location.street.number +
                        ' ' +
                        results.location.street.name +
                        ' ' +
                        results.location.city,
                    phone: results.phone,
                    password: results.login.password,
                };
                setUser(tempUser);
                setValue(results.name.first + ' ' + results.name.last);
            }
        } catch (err) {
            console.log(err);
        }
    };

    const handleMouseOver = (e) => {
        console.log('mouseOver');
        if (e.target.classList.contains('app__icon')) {
            const newTitle = e.target.dataset.label;
            console.log('New title: ', newTitle);
            setTitle(`My ${newTitle} is`);
            console.log('Value:', user[newTitle]);
            setValue(user[newTitle]);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='app'>
            {user ? (
                <div className='app__container'>
                    <div className='app__header'>
                        <img
                            className='app__image'
                            src={user.image}
                            alt={user.name}
                        />
                    </div>
                    <div className='app__footer'>
                        <p className='app__title'>{title}</p>
                        <h4 className='app__value'>{value}</h4>
                        <div className='app__info'>
                            <button
                                className='app__icon'
                                data-label='name'
                                onMouseOver={handleMouseOver}
                            >
                                <FaUserAlt />
                            </button>
                            <button
                                className='app__icon'
                                data-label='email'
                                onMouseOver={handleMouseOver}
                            >
                                <FaEnvelopeOpen />
                            </button>
                            <button
                                className='app__icon'
                                data-label='age'
                                onMouseOver={handleMouseOver}
                            >
                                <FaCalendarCheck />
                            </button>
                            <button
                                className='app__icon'
                                data-label='street'
                                onMouseOver={handleMouseOver}
                            >
                                <FaMap />
                            </button>
                            <button
                                className='app__icon'
                                data-label='phone'
                                onMouseOver={handleMouseOver}
                            >
                                <FaPhone />
                            </button>
                            <button
                                className='app__icon'
                                data-label='password'
                                onMouseOver={handleMouseOver}
                            >
                                <FaLock />
                            </button>
                        </div>
                        <button className='app__random' onClick={fetchData}>
                            Random User
                        </button>
                    </div>
                </div>
            ) : (
                <div className='loading'>Loading...</div>
            )}
        </div>
    );
}

export default App;
