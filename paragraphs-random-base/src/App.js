import { useEffect, useState } from 'react';
import texts from './asset/data';

function App() {
    const [data, setData] = useState(texts);
    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0);

    useEffect(() => {
        setData(texts.slice(0, count));
    }, [count]);

    const handleGenerate = () => {
        if (value < 0) {
            setCount(0);
            setValue(0);
        } else {
            setCount(value);
        }
    };

    return (
        <div className='App'>
            <h4 className='App__title'>TIRED OF BORING LOREM IPSUM?</h4>
            <div className='App__control'>
                <p className='App__paragraph'>Paragraphs:</p>
                <input
                    type='number'
                    defaultValue={count}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className='App__input'
                />
                <button className='btn small' onClick={handleGenerate}>
                    Generate
                </button>
            </div>

            <div className='App__content'>
                {data.map((d, index) => (
                    <p className='App__item' key={index}>
                        {d}
                    </p>
                ))}
            </div>
        </div>
    );
}

export default App;
