import React from 'react';
import Users from '../Users/Users';
import { NavLink } from 'react-router';
import SideProdunt from '../SideProduct/SideProdunt';

const SideBar = () => {
    return (
        <div className='bg-red-400 p-4 m-3 rounded-2xl h-full'>
            <NavLink to={'SideProduct' } className={'btn border-2 border-amber-100 gap-3 m-3.5'}>side pdc</NavLink>
            <p>side-bar 1</p>
            <p>side-bar 2</p>
            <p>side-bar 3</p>
            <p>side-bar 4</p>
            <p>side-bar 5</p>
            
        </div>
    );
};

export default SideBar;