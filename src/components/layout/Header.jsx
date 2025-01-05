import Menu from '../common/Menu';

import './Header.css';

function Header() {
    return (
        <header className="bg-dark text-white py-4  special-elite-regular">
            <div className="container mx-auto flex justify-center xl:hidden md:block">
                <Menu styleClass="flex flex-wrap items-center space-x-6 "/>
            </div>
        </header>
    );
}

export default Header;
