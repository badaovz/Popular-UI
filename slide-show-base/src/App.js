import { useState } from 'react';
import reviews from './asset/data';
import Slide from './components/Slide';

function App() {
    const [count, setCount] = useState(0);
    const l = reviews.length - 1;

    const backSlide = () => {
        const newCount = count - 1;
        if (newCount < 0) {
            setCount(l);
        } else {
            setCount(newCount);
        }
    };
    const nextSlide = () => {
        const newCount = count + 1;
        if (newCount > l) {
            setCount(0);
        } else {
            setCount(newCount);
        }
    };

    return (
        <div className='App'>
            <h4 className='App__title'>Our Reviews</h4>
            <div className='underline'></div>
            <div className='App__items'>
                <Slide
                    {...reviews[count]}
                    backSlide={backSlide}
                    nextSlide={nextSlide}
                />
            </div>
        </div>
    );
}

export default App;
