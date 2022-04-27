
import {createContext, useState} from 'react'
import Cart from './Cart';
import Item from './Item';
import { useContext } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (item, qty) => {
        console.log("item antes de agregar", item)

        let found = cartList.find(product => product.idItem === item.id);

        if ( found === undefined) {
            setCartList([
                ...cartList,
                {
                    idItem: item.id,
                    imgItem: item.img,
                    nameItem: item.nombre,
                    precioItem: item.precio,
                    qtyItem: qty  
                }
            ]);
        } 
        else {
        found.qtyItem += qty;
        setCartList([
            ...cartList
        ]);
    }
}


    const clear = () => {
        setCartList([]);
    }

    const removeItem = (id) => {
       let result = cartList.filter (item => item.idItem !=id);
       setCartList(result);
    }
    

    const calcTotalPorItem = (idItem) => {
        let index = cartList.map( item => item.idItem).indexOf(idItem);
        return cartList[index].costItem * cartList[index].qtyItem;
    }

    const calcItemsQty = () => {
        let qtys = cartList.map(item => item.qtyItem);
        return qtys.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }
  
    
    
    return (
        <CartContext.Provider value={{
            cartList, 
            addToCart, 
            clear, 
            removeItem,
            calcTotalPorItem,
            calcItemsQty,
            }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;