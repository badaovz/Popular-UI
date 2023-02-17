import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './asset/data';
import { useRef } from 'react';

function App() {
    const [barIsClicked, setBarIsClicked] = useState(false);

    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const appRef = useRef(null);

    //show menu links in mobile with js
    // useEffect(() => {
    //     const linksHeight = linksRef.current.getBoundingClientRect().height;
    //     console.log('Links height: ', linksHeight);
    //     console.log(
    //         'Width: ',
    //         typeof appRef.current.getBoundingClientRect().width,
    //     );
    //     if (barIsClicked) {
    //         linksContainerRef.current.style.height = `${linksHeight}px`;
    //     } else if (
    //         !barIsClicked &&
    //         appRef.current.getBoundingClientRect().width < 840
    //     ) {
    //         linksContainerRef.current.style.height = '0px';
    //     }
    // }, [barIsClicked]);

    return (
        <div className='App' ref={appRef}>
            <nav>
                <div className='App__header'>
                    <h3 className='App__logo'>
                        D.<span>Nguyen</span>
                    </h3>
                    <button
                        className='App__bar'
                        onClick={() => setBarIsClicked(!barIsClicked)}
                    >
                        <FaBars />
                    </button>
                </div>
                <input
                    aria-label='Search contacts'
                    placeholder='Search'
                    type='search'
                    className='App__search'
                />
                <div
                    className={`App__linksContainer ${
                        barIsClicked ? 'show' : ''
                    }`}
                >
                    {/* ref={linksContainerRef} */}
                    <ul className={`App__links `}>
                        {/*  ref={linksRef} */}

                        {links.map((l) => {
                            return (
                                <li className='App__link' key={l.id}>
                                    {l.text}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <ul className='App__socials'>
                    {social.map((s) => (
                        <li key={s.id} className='App__social'>
                            <a href={s.url}>{s.icon}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default App;
