
import {createContext, useState} from 'react'
import Cart from './Cart';
import Item from './Item';
import { useContext } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (item, qty) => {
        let found = cartList.find(product => product.idItem === item.id);

        if ( found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.image[0],
                    nameItem: item.name,
                    precioItem: item.cost,
                    qtyItem: qty 
                }
            ]);
    } else {
        found.qtyItem += qty
    }
}

    const clear = () => {
        setCartList([]);
    }

    const removeItem = (id) => {
       let result = cartList.filter (item.idItem !=id);
       setCartList(result);
    }
    
    return (
        <CartContext.Provider value={{cartList, addToCart, clear, removeItem}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;