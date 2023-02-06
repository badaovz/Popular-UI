import { useEffect, useState } from 'react';
import data from './asset/data';
import Slide from './components/Slide';

function App() {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex((oldIndex) => {
                let index = oldIndex + 1;
                if (index > people.length - 1) {
                    index = 0;
                }
                return index;
            });
        }, 5000);

        return () => clearInterval(slider);
    }, [index, people.length]);

    const backSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex - 1;
            if (index < 0) {
                index = people.length - 1;
            }
            return index;
        });
    };

    const nextSlide = () => {
        setIndex((oldIndex) => {
            let index = oldIndex + 1;
            if (index > people.length - 1) {
                index = 0;
            }
            return index;
        });
    };

    return (
        <div className='App'>
            <h4 className='App__title'>Reviews</h4>
            <div className='underline'></div>

            <div className='App__content'>
                <button className='App__control'>
                    <i class='fa-solid fa-chevron-left' onClick={backSlide}></i>
                </button>

                <div className='App__box'>
                    {people.map((i, peopleIndex) => (
                        <Slide
                            key={i.id}
                            {...i}
                            peopleIndex={peopleIndex}
                            index={index}
                            length={people.length - 1}
                        />
                    ))}
                </div>

                <button className='App__control'>
                    <i
                        class='fa-solid fa-chevron-right'
                        onClick={nextSlide}
                    ></i>
                </button>
            </div>
        </div>
    );
}

export default App;
