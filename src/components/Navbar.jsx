import CartWidget from './CartWidget'
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <nav>
            <ul className="navegador">    
            
                <li>
                   <Link to='/' > <h2> MARINO VARETA </h2></Link>
                    
                </li>

                <li>
                    <span> <Link to='/category/16'> Productos suaves </Link> </span>
                </li>

                <li>
                   <span> <Link to='/category/17'> Productos exfoliantes </Link> </span>
                </li>
                
                <li>
                   <span> <Link to='/category/18'> Combos </Link> </span> 
                </li>
                
                <li>
                <Link to='/cart'><CartWidget></CartWidget></Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
