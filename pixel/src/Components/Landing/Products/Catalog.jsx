import Banner from "../Banner";
import cart from './cart.png';
import icon from './favicon.png'
import { useState } from 'react';
import Footer from "../Footer";
import { Link } from "react-router-dom";
export default function Catalog(){
    const [search, setSearch] = useState('');
    
    function handleChange(e){
        e.preventDefault();
        setSearch(e.target.value);
    }

   

    return(<>
    <div className='header'>
     
       <div className='title'>
            <img src={icon} className='logo'></img>
            <div className='name'><Link to='/' className="name">PixelStore</Link></div>
        </div>
       
        <div className='search'>
            <input type='text' className='search' placeholder='Search' value={search} onChange={handleChange}></input>
        </div>
        
        <div className='rh'>
        <button className='shop'>Shop All</button>
            <button className='code'>View Code</button>
            <img src={cart} className='cart'></img>
            
        </div>
    
    </div>
    <Banner/>
    <Footer/>
    </>)
}