import React, {useState} from "react" //6.8K (gzipped:2.7K);


const ItemCount = ({initial, stock, onAdd}) => {
    const [contador, setContador] = useState( initial );

    const increment = () => {
        if (contador < stock ) {
            setContador(contador+1)
        }
    }

    const decrement = () => {
        if (contador > initial){
            setContador(contador -1)
        }
    }
    
    return (
        <div>
            <div className='button-container'>
                <button onClick={decrement} className='buttons-counters'> - </button>
                    {contador}
                <button onClick={increment} className='buttons-counters'> + </button>
                <button className='buttons-counters'  onClick={() => onAdd(contador)} > Agregar al carrito </button>
            </div>
        </div>
    )
}

export default ItemCount

