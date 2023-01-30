import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './components/Card';

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(
                'https://course-api.com/react-tours-project',
            );
            setData(res.data);
        };
        fetchData();
    }, []);

    const removeTourById = (id) => {
        const newData = data.filter((i) => i.id !== id);
        setData(newData);
    };

    return (
        <div className='App'>
            <h4 className='App__title'>Our Tours</h4>
            <div className='underline'></div>
            <div className='App__items'>
                {data.map((item) => (
                    <Card {...item} removeTourById={removeTourById} />
                ))}
            </div>
        </div>
    );
}

export default App;
