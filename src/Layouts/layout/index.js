import React from 'react';
import Header from "../header";

const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            <main>
                {children}
            </main>
        </div>
    );
};

export default Layout;