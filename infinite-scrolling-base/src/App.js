import { useEffect, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Photo from './components/Photo';

function App() {
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const appRef = useRef();

    const url =
        'https://api.unsplash.com/photos/?client_id=f7N-c7ynV9x6FAE3c1mP35-_1uRQeFNKMYlRro55XGA&page=';
    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${url}${page}`);
            const data = await res.json();
            setPhotos([...photos, ...data]);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, [page]);

    useEffect(() => {
        const handleScroll = (e) => {
            if (
                window.innerHeight + window.scrollY >=
                document.body.scrollHeight - 2
            ) {
                setPage((prePage) => prePage + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    });

    return (
        <div className='app' ref={appRef}>
            <div className='app__header'>
                <h3 className='app__title'>Infinite Scrolling</h3>
                <div className='underline'></div>
            </div>
            <div className='app__search'>
                <input type='text' />
                <FaSearch
                    onClick={() => {
                        console.log('Click me!');
                    }}
                />
            </div>
            <div className='app__body'>
                {photos &&
                    photos.map((photo, index) => (
                        <Photo {...photo} key={index} />
                    ))}
            </div>
            {loading && <div className='app__loading'>Loading...</div>}
        </div>
    );
}

export default App;
