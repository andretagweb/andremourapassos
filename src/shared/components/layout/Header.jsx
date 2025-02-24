import './Header.css';

import Menu from '../common/Menu';

function Header() {

    return (
        <header className='xl:hidden '>
            <div className="header-container mx-auto flex justify-center md:block bg-dark text-white
             py-4 xsm:py-2 fixed z-10 w-full special-elite-regular">
                <Menu />
            </div>
        </header>
    );
}

export default Header;
