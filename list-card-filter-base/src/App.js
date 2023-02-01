import { useState } from 'react';
import menu from './asset/data';
import Card from './components/Card';
import Filter from './components/Filter';

const categories = ['all', ...new Set(menu.map((i) => i.category))];

function App() {
    const [data, setData] = useState(menu);
    const [filValue, setFilValue] = useState('all');

    const handleFilter = (e, i) => {
        console.log('VAlue: ', i);
        if (e.target.dataset.category === 'all') {
            setData(menu);
        } else {
            const newData = menu.filter(
                (i) => i.category === e.target.dataset.category,
            );
            setData(newData);
        }
        setFilValue(i);
    };

    console.log('FilValueApp: ', filValue);

    return (
        <div className='App'>
            <h4 className='App__title'>Our Menu</h4>
            <div className='underline'></div>

            <Filter
                categories={categories}
                handleFilter={handleFilter}
                filValue={filValue}
            />
            <div className='App__items'>
                {data.map((i) => (
                    <Card {...i} key={i.id} />
                ))}
            </div>
        </div>
    );
}

export default App;
