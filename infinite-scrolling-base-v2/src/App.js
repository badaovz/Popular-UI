import { useEffect, useRef, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import Photo from './components/Photo';

function App() {
    const [photos, setPhotos] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');

    const appRef = useRef();

    const mainUrl = 'https://api.unsplash.com/photos/';
    const searchUrl = 'https://api.unsplash.com/search/photos/';

    const clientId = `?client_id=${process.env.REACT_APP_CLIENT_ID}`;

    const fetchData = async () => {
        setLoading(true);
        let url;
        const urlPage = `&page=${page}`;
        const urlQuery = `&query=${query}`;
        if (query) {
            url = `${searchUrl}${clientId}${urlPage}${urlQuery}`;
        } else {
            url = `${mainUrl}${clientId}${urlPage}`;
        }
        try {
            const res = await fetch(url);
            let data = await res.json();
            if (query && page === 1) {
                data = data.results;
                setPhotos(data);
            } else {
                if (Array.isArray(data)) {
                    setPhotos([...photos, ...data]);
                } else {
                    data = data.results;
                    setPhotos([...photos, ...data]);
                }
            }
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

    const handleSearch = (e) => {
        e.preventDefault();

        console.log('Query: ', query.trim());
        if (!query.trim()) {
            return;
        }
        if (page === 1) {
            fetchData();
        }
        setPage(1);
    };

    return (
        <div className='app' ref={appRef}>
            <div className='app__header'>
                <h3 className='app__title'>Infinite Scrolling</h3>
                <div className='underline'></div>
            </div>
            <div className='app__search'>
                <form action='' onSubmit={handleSearch}>
                    <input
                        type='text'
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button type='submit'>
                        {' '}
                        <FaSearch />
                    </button>
                </form>
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
