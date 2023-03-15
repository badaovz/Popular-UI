import { useState } from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { useAppContext } from './contexts/context';
import './index.css';

function App() {
    const [paragraph, setParagraph] = useState('# markdown preview');
    return (
        <div className='app'>
            <div className='app__paragraph'>
                <textarea
                    name=''
                    id=''
                    cols='30'
                    rows='10'
                    value={paragraph}
                    onChange={(e) => setParagraph(e.target.value)}
                ></textarea>
            </div>
            <div className='app__markDown'>
                <ReactMarkdown>{paragraph}</ReactMarkdown>
            </div>
        </div>
    );
}

export default App;
