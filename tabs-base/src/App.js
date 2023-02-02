import axios from 'axios';
import { useEffect, useState } from 'react';
import TabDetail from './components/TabDetail';

function App() {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [value, setValue] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(
                    'https://course-api.com/react-tabs-project',
                );
                setData(res.data);
                const companies = [...new Set(res.data.map((d) => d.company))];
                setCompanies(companies);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p className='loading'>Loading ...</p>;

    return (
        <div className='App'>
            <h4 className='App__title'>Experience</h4>
            <div className='underline'></div>

            <div className='App__content'>
                <div className='App__companies'>
                    {companies.map((c, i) => (
                        <button
                            key={i}
                            className={`App__company ${
                                i === value ? 'active' : ''
                            }`}
                            onClick={() => setValue(i)}
                        >
                            {c}
                        </button>
                    ))}
                </div>
                <TabDetail {...data[value]} />
            </div>
        </div>
    );
}

export default App;
