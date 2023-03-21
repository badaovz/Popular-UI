import { useEffect, useState } from 'react';
import Card from './components/Card';
import pagination from './utils';

function App() {
    const [users, setUsers] = useState();
    const [page, setPage] = useState(0);
    const [pageTotal, setPageTotal] = useState();

    const url =
        'https://api.github.com/users/john-smilga/followers?per_page=100';
    const fetchData = async () => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            const { newData, totalPages } = pagination(data);
            setUsers(newData);
            setPageTotal(totalPages);
        } catch (err) {
            console.log(err);
        }
    };

    console.log();
    useEffect(() => {
        fetchData();
    }, []);

    const backPagination = () => {
        const newPage = page - 1;
        if (newPage < 0) {
            setPage(pageTotal - 1);
        } else {
            setPage(newPage);
        }
    };
    const nextPagination = () => {
        const newPage = page + 1;
        if (newPage > pageTotal - 1) {
            setPage(0);
        } else {
            setPage(newPage);
        }
    };

    return (
        <div className='app'>
            <div className='app__header'>
                <h3 className='app__title'>Pagination</h3>
                <div className='underline'></div>
            </div>
            <div className='app__body'>
                {users &&
                    users[page].map((user) => <Card {...user} key={user.id} />)}
            </div>
            <div className='pagination'>
                <button className='pagination__back' onClick={backPagination}>
                    Back
                </button>
                {users &&
                    users.map((user, index) => {
                        return (
                            <button
                                key={index}
                                className={`pagination__index ${
                                    page === index ? 'active' : ''
                                }`}
                                onClick={() => {
                                    setPage(index);
                                }}
                            >
                                {index + 1}
                            </button>
                        );
                    })}
                <button className='pagination__next' onClick={nextPagination}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default App;
