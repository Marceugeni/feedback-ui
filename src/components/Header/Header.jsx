import React from 'react';
import './Header.css';


function Header({ text }) {
  return (
    <header>
        <div className="container">
            <h2 className='title!'>{text}</h2>
        </div>
        
    </header>
  )
}

export default Header;