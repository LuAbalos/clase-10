import { Button } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CardBody, CardGroup, Card, CardImg, CardTitle,CardSubtitle, CardText, CardHeader, CardFooter, FormatNumber} from "reactstrap";
import { CartContext } from "./CartContext";

const Cart = ({ item }) => {
    const test = useContext(CartContext);
     
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
                                            {item.precioItem} por unidad
                                        </CardText>
                                        <CardText>
                                         {test.calcTotalPerItem(item.idItem)} 
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
            {/* {
                test.cartList.length > 0 &&
                <>
                    
                    <Card>
                        <CardHeader tag="h3">
                            Resumen de compra
                        </CardHeader>
                        <CardBody>
                            <CardTitle tag="h5">
                            <div number={test.calcSubTotal()} />
                            </CardTitle>
                            <CardText>
                                Total
                                <div number={test.calcTotal()}/>
                            </CardText>
                            <Button>
                                Terminar Compra
                            </Button>
                        </CardBody>
                        <CardFooter className="text-muted">
                            Footer
                        </CardFooter>
                    </Card>
                </>    
            } */}
        </>
    )
}

export default Cart;