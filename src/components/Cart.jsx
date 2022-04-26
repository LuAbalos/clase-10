import { Button } from "bootstrap";
import { useContext } from "react";
import { CardBody, CardGroup, Card, CardImg, CardTitle,CardSubtitle, CardText, } from "reactstrap";
import { CartContext } from "./CartContext";

const Cart = () => {
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
                            test.cartList.map(item =>
                                <Card>
                                    <CardImg
                                    alt="Card image cap"
                                    src= {item.image[0]}
                                    top
                                    width="100%"
                                    />
        
                                    <CardBody>
                                        <CardTitle tag="h5">
                                            Product {item.name[0]}
                                        </CardTitle>
                                        <CardSubtitle
                                            className="mb-2 text-muted"
                                            tag="h6"
                                        >
                                            2 items
                                        </CardSubtitle>
                                        <CardText>
                                            $ {item.precio} each
                                        </CardText>
                                    </CardBody>
                                </Card> 
        
                            )     
                        }
                       <button onClick={test.decrement} className='buttons-counters'> descartar un producto </button>
                    </CardGroup>
                )
            }
        </>
    )
}

export default Cart;