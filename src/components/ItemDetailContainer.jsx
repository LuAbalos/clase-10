import ItemDetail from "./ItemDetail"
import { useEffect, useState } from "react";
import customFetch from "../js-components/customFetch"
import {products} from '../js-components/products'
import { useParams } from "react-router-dom";
import Item from "./Item";

const ItemDetailContainer = () => {
    const [dato, setDato] = useState ({});
    const {idItem} = useParams();

     useEffect (() => {
        customFetch(2000, products.find(item => item.id === parseInt(idItem)))
            .then((result) => setDato(result))
            .catch((err) => console.log(err)); 
    }, []);
    
    return (
      <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;
