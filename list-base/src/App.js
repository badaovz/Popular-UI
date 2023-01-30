import { useState } from 'react';
import { data } from './asset/data';
import List from './components/List';

function App() {
    console.log('data: ', data);
    const [listData, setListData] = useState(data);
    const handleClear = () => {
        setListData([]);
    };
    const handleShowAllUser = () => {
        setListData(data);
    };

    const handleFunction = () => {
        console.log('meo chay luon sss');
        return 'oc cho';
    };

    return (
        <div className='App'>
            <h4 className='App__title'>{listData.length} user of list</h4>
            {listData.map((item) => (
                <List {...item} />
            ))}
            {listData.length === 0 ? (
                <button className='btn' onClick={handleShowAllUser}>
                    All user
                </button>
            ) : (
                <button className='btn' onClick={handleClear}>
                    Clear All
                </button>
            )}
        </div>
    );
}

export default App;
