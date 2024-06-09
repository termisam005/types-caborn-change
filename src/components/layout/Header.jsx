import React from 'react';


const Header = ({ className, children }) => {

  return (
    <header className={className}>
        <div className='header_in'>
            {children}
        </div>
    </header>
  );
};

export default Header;