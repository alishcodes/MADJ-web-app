import { createContext, useState } from 'react';
import { ShoppingCartW } from "../Components/ShoppingCartW";

const ShoppingCartContext = createContext({});

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