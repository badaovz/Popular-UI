import questions from './asset/data';
import Accordion from './components/Accordion';

function App() {
    return (
        <div className='App'>
            <h4 className='App__title'>
                Example Accordion with Questions and Answers
            </h4>
            <div className='App__items'>
                {questions.map((q) => (
                    <Accordion {...q} />
                ))}
            </div>
        </div>
    );
}

export default App;
