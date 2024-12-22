import Menu from './Menu';

import './Header.css';

function Header() {
    return (
        <header className="bg-dark text-white py-4 xl:hidden md:block special-elite-regular">
            <div className="container mx-auto flex justify-center">
                <Menu styleClass="flex flex-wrap items-center space-x-6"/>
            </div>
        </header>
    );
}

export default Header;
