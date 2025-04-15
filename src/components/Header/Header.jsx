import React from 'react';
import { Link, NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <h3  className='border-2 border-gray-300 p-4  rounded-2xl'>this is header</h3>
            <nav className='py-4'>
                <NavLink to='/laptop'>Laptop</NavLink>
                <NavLink to='/Contact'>Contact</NavLink>
                <NavLink to='/mobiles'>Mobile</NavLink>
                <NavLink to='/Chasma'>Chasma</NavLink>
                <NavLink to='/Hoom'>Hoom</NavLink>
            </nav>
        </div>
    );
};

export default Header;