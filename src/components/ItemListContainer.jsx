import React, { useEffect, useState } from "react";
import ItemList from './ItemList'
import customFetch from "../js-components/customFetch"
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "../js-components/firebaseConfig";

const ItemListContainer= () => {
  const [dato, setDato] = useState ([]);
  const { idCategory } = useParams ();

  useEffect(() =>{
    const fetchFromFirestore = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const dataFromFirestore = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      return dataFromFirestore;
    }
    fetchFromFirestore()
      .then(result => setDato(result))
      .catch(err => console.log (err));
  }, [dato]);
  
  useEffect (() => {
    return (() => {
      setDato([]);
    })
  }, []);

  return (
    <>
      <ItemList productos={dato} />
    </>
  );
}
  
export default ItemListContainer;

// function onAdd (qty) {
//   alert(`se agregó ' ' ${qty} productos`)
// }