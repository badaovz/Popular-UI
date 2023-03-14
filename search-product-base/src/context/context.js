const AppContext = createContext();

export default function AppProvider({ children }) {
    const [textSearch, setTextSearch] = useState('');
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${url}${textSearch}`);
            const data = await res.json();
            console.log('Data: ', data);
            const products = await data.drinks.map((item) => {
                const {
                    idDrink,
                    strDrink,
                    strDrinkThumb,
                    strAlcoholic,
                    strGlass,
                    strInstructions,
                    strCategory,
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                } = item;
                return {
                    id: idDrink,
                    name: strDrink,
                    image: strDrinkThumb,
                    info: strAlcoholic,
                    glass: strGlass,
                    instructions: strInstructions,
                    category: strCategory,
                    ingredient: [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                    ],
                };
            });
            setProducts(products);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, [textSearch, url]);

    return (
        <AppContext.Provider
            value={{
                loading,
                textSearch,
                setTextSearch,
                products,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export const useAppContext = () => {
    return useContext(AppContext);
};
