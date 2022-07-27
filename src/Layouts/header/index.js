import React from 'react';
import './style.scss'

const Header = () => {
    return (
        <>
           <div id="header">
               <div className="container">
                   <div className="header">
                       <div className="header--logo">
                           <h1 className="header--logo__circle"> </h1>
                           <div className="header--logo__title">My Daily Notes</div>
                       </div>
                   </div>
               </div>
           </div>
        </>
    );
};

export default Header;