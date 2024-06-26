
import cart from './cart.png';
import icon from './favicon.png'
import { useState } from 'react';
import { Link} from 'react-router-dom';
export default function Header(){
    const [search, setSearch] = useState('');
    
    function handleChange(e){
        e.preventDefault();
        setSearch(e.target.value);
    }

   

    return(<>
    <div className='header'>
     
       <div className='title'>
            <img src={icon} className='logo'></img>
            <div className='name'><Link to='/' className='name'>PixelStore</Link></div>
        </div>
       
        <div className='search'>
            <input type='text' className='search' placeholder='Search' value={search} onChange={handleChange}></input>
        </div>
        
        <div className='rh'>
        <Link to='catalog'><button className='shop'>Shop All</button></Link>
            <button className='code'>View Code</button>
            <img src={cart} className='cart'></img>
            
        </div>
    
    </div>
    
    </>)
}