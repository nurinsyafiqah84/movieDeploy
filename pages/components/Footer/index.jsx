//page untuk panggil nav bar details
import React from 'react';
import Directory from '../../layouts/Directory';


const Header = () => {
    return (
        <header className='p-8 bg-darkBlue text-white'>
            <Directory/>
        </header>
    );
};

export default Header;