import React from 'react';
import { NavLink,Outlet } from 'react-router-dom';
const Products = () => {
    return (
    <>        
        <div>
            <input type='search' placeholder='Search Products'/> <br/> 
        </div>
        <nav>
        <NavLink to='featured'>Featured</NavLink>
        <NavLink to='new'>New</NavLink>
        </nav>
    <Outlet />
    </>
    );
};

export default Products;