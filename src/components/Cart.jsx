import { Button } from "react";
import { useContext } from "react";
import { CardBody, CardGroup, Card, CardImg, CardTitle,CardSubtitle, CardText, } from "reactstrap";
import { CartContext } from "./CartContext";

const Cart = ({ item }) => {
    const test = useContext(CartContext);
     console.log(test.cartList)
    return (
       <>
            <CardTitle> YOUR CART</CardTitle>
            <button onClick={test.clear}>Eliminar Todos</button>
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
                                            Product:  {item.nameItem}
                                        </CardTitle>
                                        <CardSubtitle
                                            className="mb-2 text-muted"
                                            tag="h6"
                                        >
                                            {item.idItem} items
                                        </CardSubtitle>
                                        <CardText>
                                            {item.precioItem} por unidad
                                        </CardText>
                                        <CardText>
                                        <button onClick={() => test.removeItem(item.idItem)} > descartar un producto </button>
                                        </CardText>
                                    </CardBody>
                                </Card>, 
                
                            
                            )    
                             
                            
                        }
                     
                    </CardGroup>
                )
            }
        </>
    )
}

export default Cart;