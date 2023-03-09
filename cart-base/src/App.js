import { useEffect } from 'react';
import CartContent from './components/CartContent';
import Navbar from './components/Navbar';
import { useCartContext } from './contexts/context';

function App() {
    const { loading } = useCartContext();
    return (
        <>
            <Navbar />
            {loading ? (
                <h3 className='loading'>loading...</h3>
            ) : (
                <CartContent />
            )}
        </>
    );
}

export default App;
