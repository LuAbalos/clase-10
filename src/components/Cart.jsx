import { Button } from "react";
import { useContext } from "react";
import { CardBody, CardGroup, Card, CardImg, CardTitle,CardSubtitle, CardText, } from "reactstrap";
import { CartContext } from "./CartContext";

const Cart = ({ item }) => {
    const test = useContext(CartContext);
    // console.log(test.cartList)
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
                                    src= {item.img}
                                    top
                                    width="100%"
                                    />
        
                                    <CardBody>
                                        <CardTitle tag="h5">
                                            Product:  {item.nombre}
                                        </CardTitle>
                                        <CardSubtitle
                                            className="mb-2 text-muted"
                                            tag="h6"
                                        >
                                            2 items
                                        </CardSubtitle>
                                        <CardText>
                                            $ {item.precio} por unidad
                                        </CardText>
                                        <CardText>
                                        <button onClick={test.decrement} > descartar un producto </button>
                                        </CardText>
                                    </CardBody>
                                </Card>, 
                                console.log(item)
                            
                            )    
                             
                            
                        }
                     
                    </CardGroup>
                )
            }
        </>
    )
}

export default Cart;