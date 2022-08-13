import { createContext, useState } from 'react';
import { ShoppingCartW } from "../Components/ShoppingCartW";



const ShoppingCartContext = createContext({});

/**
 * Shares data about the shopping cart between child nodes
 *
 * @param children
 * @returns {JSX.Element}
 * @constructor
 */
export function ShoppingCartProvider({ children }) {
    const [cartOpen, setCartOpen] = useState(false);

    const openCart = () => setCartOpen(true);
    const closeCart = () => setCartOpen(false);

    return (
        <ShoppingCartContext.Provider
            value={{
                openCart,
                closeCart
            }}>
            {children}
            <ShoppingCartW cartOpen={cartOpen}/>
        </ShoppingCartContext.Provider>
    )
}

export default ShoppingCartContext;