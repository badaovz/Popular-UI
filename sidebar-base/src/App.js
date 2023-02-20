import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import SideBar from './components/SideBar';

function App() {
    const [barIsClicked, setBarIsClicked] = useState(false);
    const [isModalShow, setIsModalShow] = useState(false);

    const closeSidebar = () => {
        setBarIsClicked(false);
    };
    const closeModal = () => {
        setIsModalShow(false);
    };

    return (
        <div className='App'>
            <button
                className='App__bar'
                onClick={() => setBarIsClicked(!barIsClicked)}
            >
                <FaBars />
            </button>
            <SideBar clicked={barIsClicked} closeSidebar={closeSidebar} />
            <button className='App__modal' onClick={() => setIsModalShow(true)}>
                SHOW MODAL
            </button>
            <div className={`App__overlay ${isModalShow ? 'active' : ''}`}>
                <div className='App__box'>
                    This is Box modal{' '}
                    <button
                        className='App__closeModal exitBtn'
                        onClick={closeModal}
                    >
                        <FaTimes />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
