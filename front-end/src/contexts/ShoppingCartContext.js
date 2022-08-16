import {createContext, useState} from 'react';
import { ShoppingCartW } from "../Components/ShoppingCartW";
;

const ShoppingCartContext = createContext();


<<<<<<< Updated upstream
const ShoppingCartContext = createContext({});
=======
>>>>>>> Stashed changes

/**
 * Shares data about the shopping cart between child nodes
 *
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export function ShoppingCartProvider({ children }) {
    const [cartOpen, setCartOpen] = useState(false);
    const [items, setItems] = useState([]);
<<<<<<< Updated upstream
=======
    // const [total, setTotal] = useState(0);

>>>>>>> Stashed changes

    const openCart = () => setCartOpen(true);
    const closeCart = () => setCartOpen(false);

    const addToCart = (id, title, price) => {
        const exist = items.find(x => x.id === id);
        if (exist) {
            setItems(items.map((x) =>
                x.id === id ? {...exist, qty: exist.qty + 1} : x))
        } else {
            setItems([...items, {id, title, price, qty: 1}])
        }
    }

    const removeFromCart = (id) => {
        const exist = items.find(x => x.id === id);
        if (exist) {
            setItems(items.map((x) =>
                x.id === id ? {...exist, qty: exist.qty - 1} : x))
        }
        let index = items.findIndex(item => id === item.id);
        if (index !== -1 && items[index].qty === 1) {
            setItems(items.filter(item => item.id !== id));
        }
    }

    return (
        <ShoppingCartContext.Provider
            value={{
                openCart,
                closeCart,
                items,
                addToCart,
<<<<<<< Updated upstream
                removeFromCart,
=======
                removeFromCart
>>>>>>> Stashed changes
            }}>
            {children}
            <ShoppingCartW cartOpen={cartOpen}/>
        </ShoppingCartContext.Provider>
    );
}

export default ShoppingCartContext;
