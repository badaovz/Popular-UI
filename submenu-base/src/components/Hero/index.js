import React from 'react';
import './index.css';
import phone from '../../asset/images/phone.svg';
import { useSubmenuContext } from '../../contexts/context';

const Hero = () => {
    console.log('log message file ');
    const { closeSubmenu } = useSubmenuContext();

    return (
        <section className='hero' onMouseOver={closeSubmenu}>
            <div className='hero__container'>
                <div className='hero__info'>
                    <h2 className='hero__title'>
                        Payments <br /> infrastructure <br /> for the internet
                    </h2>
                    <p className='hero__text'>
                        Millions of companies of all sizes—from startups to
                        Fortune 500s—use Stripe’s software and APIs to accept
                        payments, send payouts, and manage their businesses
                        online.
                    </p>
                    <button className='hero__start btn'>Start now</button>
                </div>
                <img src={phone} alt='phone' className='hero__phone' />
            </div>
        </section>
    );
};

export default Hero;
