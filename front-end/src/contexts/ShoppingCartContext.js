import { createContext, useState } from 'react';
import { ShoppingCartW } from "../Components/ShoppingCartW";

const ShoppingCartContext = createContext({});

export function ShoppingCartProvider({ children }) {
    const [cartOpen, setCartOpen] = useState(false);
    const [products, setProducts] = useState([]);
    let total = 0.00;

    const openCart = () => setCartOpen(true);
    const closeCart = () => setCartOpen(false);

    const addToCart = (title, price) => {
        setProducts((prevState) => [...prevState, {title, price}]);
    };

    const clearCart = () => {
        setProducts((prevState) => []);
    };

    products.map((curr) => (total += curr.price));

    return (
        <ShoppingCartContext.Provider
            value={{
                openCart,
                closeCart,
                products,
                addToCart,
                clearCart,
                total
            }}>
            {children}
            <ShoppingCartW cartOpen={cartOpen}/>
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartContext;