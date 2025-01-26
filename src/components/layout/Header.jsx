import Menu from '../common/Menu';

import './Header.css';

function Header() {
    return (
        <header>
            <div className="header-container mx-auto flex justify-center xl:hidden md:block bg-dark text-white
             py-4 fixed z-10 w-full special-elite-regular">
                <Menu/>
            </div>
        </header>
    );
}

export default Header;
