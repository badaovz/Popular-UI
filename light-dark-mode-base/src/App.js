import { useEffect, useState } from 'react';
import articles from './asset/data';
import Article from './components/Article';

const getLocaleStorage = () => {
    let theme = 'light-theme';
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
    }
    return theme;
};

function App() {
    const [theme, setTheme] = useState(getLocaleStorage());

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const handleToggle = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme');
        } else {
            setTheme('light-theme');
        }
    };

    return (
        <div className='app'>
            <div className='nav'>
                <h3 className='nav__title'>Overreacted</h3>
                <button className='nav__toggle' onClick={handleToggle}>
                    Toggle
                </button>
            </div>
            <div className='body'>
                {articles.map((article, index) => (
                    <Article {...article} key={index} />
                ))}
            </div>
        </div>
    );
}

export default App;
