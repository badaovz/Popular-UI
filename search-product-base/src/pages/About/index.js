import React from 'react';
import './index.css';
import DefaultLayout from '../DefaultLayout';

const About = () => {
    return (
        <DefaultLayout>
            <div className='about'>
                <h4 className='about__title'>
                    About <span>Cocktail</span> D.Nguyen
                </h4>
                <p className='about__info'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam aspernatur harum repellat animi, ratione maiores
                    doloribus totam voluptate facilis numquam tempore iste
                    corporis excepturi necessitatibus quasi provident
                    consequuntur a ducimus. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quibusdam aspernatur harum
                    repellat animi, ratione maiores doloribus totam voluptate
                    facilis numquam tempore iste corporis excepturi
                    necessitatibus quasi provident consequuntur a ducimus.
                    consequuntur a ducimus. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Quibusdam aspernatur harum
                    repellat animi, ratione maiores doloribus totam voluptate
                    facilis numquam tempore iste corporis excepturi
                    necessitatibus quasi provident consequuntur a ducimus.
                </p>
            </div>
        </DefaultLayout>
    );
};

export default About;
