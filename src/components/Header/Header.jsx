import React from 'react';
import { Link, NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <h3  className='border-2 border-gray-300 p-4  rounded-2xl'>this is header</h3>
            <nav className='py-4'>
                <NavLink to='/laptop' className={'btn border-2 border-amber-100 gap-3 m-3.5'}>Laptop</NavLink>
                <NavLink to='/Contact'  className={'btn border-2 border-amber-100 gap-3 m-3.5'}>Contact</NavLink>
                <NavLink to='/mobiles'  className={'btn border-2 border-amber-100 gap-3 m-3.5'}>Mobile</NavLink>
                <NavLink to='/Chasma'  className={'btn border-2 border-amber-100 gap-3 m-3.5'}>Chasma</NavLink>
                <NavLink to='/'  className={'btn border-2 border-amber-100 gap-3 m-3.5'}>Hoom</NavLink>
                <NavLink to='/users'  className={'btn border-2 border-amber-100 gap-3 m-3.5'}>Users</NavLink>
                <NavLink to='/users2'  className={'btn border-2 border-amber-100 gap-3 m-3.5'}>Users-2</NavLink>
                <NavLink to='/posts'  className={'btn border-2 border-amber-100 gap-3 m-3.5'}>posts</NavLink>
                
                
            </nav>
        </div>
    );
};

export default Header;