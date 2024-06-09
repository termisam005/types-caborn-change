import React from 'react';


const Footer = ({className, children}) => {

    return (
        <footer className={className}>
            <div className='footer_in'>
                {children}
            </div>
        </footer>
    );
};

export default Footer;