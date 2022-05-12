import {createContext, useState} from 'react'


export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const addToCart = (item, qty) => {

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
    }
}


    const clear = () => {
        setCartList([]);
    }

    const removeItem = (id) => {
       let result = cartList.filter (item => item.idItem !=id);
       setCartList(result);
    }
    

    const calcTotalPerItem = (idItem) => {
        let index = cartList.map( item => item.idItem).indexOf(idItem);
        return cartList[index].precioItem * cartList[index].qtyItem;
    }
    const calcSubTotal = () => {
        let totalPerItem = cartList.map(item => calcTotalPerItem(item.idItem));
        return totalPerItem.reduce((previousValue, currentValue) => previousValue + currentValue);
    }


    const calcTotal = () => {
        return calcSubTotal();
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
            calcTotalPerItem,
            calcSubTotal,
            calcTotal,
            calcItemsQty,
            
            }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;