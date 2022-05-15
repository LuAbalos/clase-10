import React, { useEffect, useState } from "react";
import ItemList from './ItemList'
import { useParams } from "react-router-dom";
import { firestoreFetch } from "../js-components/firestoreFetch";

const ItemListContainer = () => {
  const [dato, setDato] = useState ([]);
  const { idCategory } = useParams ();

  useEffect (() => {
    firestoreFetch(idCategory)
      .then(result => setDato(result))
      .catch(err => console.log(err));
  }, [idCategory]);

  useEffect (() => {
    return (() => {
      setDato([]);
    })
  }, []);


  // useEffect(() =>{
  //   const fetchFromFirestore = async () => {
  //     const querySnapshot = await getDocs(collection(db, "products"));
  //     const dataFromFirestore = querySnapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data()
  //     }));
  //     return dataFromFirestore;
  //   }
  //   fetchFromFirestore()
  //     .then(result => setDato(result))
  //     .catch(err => console.log (err));
  // }, [dato]);
  
  
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