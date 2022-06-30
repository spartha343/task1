import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='shadow-lg flex justify-between'>
            <h1 className='p-3 text-3xl font-semibold'>Manage your task</h1>
            <nav className='navigation'>
                <Link to='/ToDo'>To do</Link>
                <Link to='/CompletedTasks'>Completed Tasks</Link>
                <Link to='/Calendar'>Calendar</Link>
            </nav>
        </div>
    );
};

export default Header;