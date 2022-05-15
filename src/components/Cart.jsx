
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CardBody, CardGroup, Card, CardImg, CardTitle,CardSubtitle, CardText, CardHeader, CardFooter, FormatNumber} from "reactstrap";
import { CartContext } from "./CartContext";
import { collection, doc, setDoc, serverTimestamp, updateDoc, increment } from "firebase/firestore";
import db from "../js-components/firebaseConfig";


const Cart = () => {
    const test = useContext(CartContext);

    const createOrder = () => {
        const itemsForDB = test.cartList.map(item => ({
          id: item.idItem,
          title: item.nameItem,
          price: item.precioItem,
          qty: item.qtyItem,
        }));

        test.cartList.forEach(async (item) => {
            const itemRef = doc(db, "products", item.idItem);
            await updateDoc(itemRef, {
              stock: increment(-item.qtyItem)
            });
        });

        let order = {
            buyer: {
              name: "Cristiano Ronaldo",
              email: "suui@ronaldo.com",
              phone: "123456789"
            },
            total: test.calcTotal(),
            items: itemsForDB,
            date: serverTimestamp()
          };

        console.log(order);
    
        const createOrderInFirestore = async () => {
          // Add a new document with a generated id
          const newOrderRef = doc(collection(db, "orders"));
          await setDoc(newOrderRef, order);
          return newOrderRef;
        }
      
        createOrderInFirestore()
          .then(result => alert('Your order has been created. Please take note of the ID of your order.\n\n\nOrder ID: ' + result.id + '\n\n'))
          .catch(err => console.log(err));
        return(
            test.setCartList([])
        )
        
      
      }
    

    return (
       <>
            <CardTitle> Tu carrito</CardTitle>
            <Link to='/'> Continuar comprando</Link>
            {
                (test.cartList.length > 0)
                ? <button onClick={test.clear}>Eliminar Todos</button>
                : <div>Tu carrito esta vacio</div>
            }

            {
                test.cartList.length > 0 && (
                    <CardGroup>
                        {
                            test.cartList.map (item => 
                                <Card >
                                    <CardImg
                                    alt="Card image cap"
                                    src= {item.imgItem}
                                    top
                                    width="100%"
                                    />
        
                                    <CardBody>
                                        <CardTitle tag="h5">
                                            Producto:  {item.nameItem}
                                        </CardTitle>
                                        <CardSubtitle
                                            className="mb-2 text-muted"
                                            tag="h6"
                                        >
                                            {item.idItem} items
                                        </CardSubtitle>
                                        <CardText>
                                           $ {item.precioItem} por unidad
                                        </CardText>
                                        <CardText>
                                         $ {item.precioItem * item.qtyItem } en total
                                        </CardText>
                                        <CardText>
                                        <button onClick={() => test.removeItem(item.idItem)} > Descartar un producto </button>
                                        </CardText>
                                        
                                        
                                    </CardBody>
                                </Card>   
                            )   
                        }
                    </CardGroup>
                )
            }
             { 
                test.cartList.length > 0 &&
                <>
                    
                    <Card>
                        <CardHeader tag="h3">
                            Resumen de compra
                        </CardHeader>
                        <CardBody>
                            <CardTitle tag="h5">
                            <p>$ {test.calcSubTotal()} </p>
                            </CardTitle>
                            <CardText>
                                Total
                                <p>$ {test.calcTotal()} </p>
                            </CardText>
                            <button onClick={createOrder}>
                                Terminar Compra
                            </button>
                        </CardBody>
                        <CardFooter className="text-muted">
                            Footer
                        </CardFooter>
                    </Card>
                </>    
            }  
        </>
    )
}

export default Cart;