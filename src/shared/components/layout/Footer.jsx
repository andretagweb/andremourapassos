import socialMedia from "../common/Social";

function Footer() {
  return (
    <footer className="bg-dark text-white pt-4 pb-20 xl:pb-6 special-elite-regular">
      <div className="mx-auto pb-10 lg:pb-0 px-2 lg:px-12 text-center">

        {/* Links principais */}
        <nav className="mb-4">
          <ul className="flex justify-center space-x-6 text-sm md:text-base">
            <li><a href="#about" className="hover:underline">Sobre</a></li>
            <li><a href="#services" className="hover:underline">Serviços</a></li>
            <li><a href="#terms" className="hover:underline">Termos de Uso</a></li>
            <li><a href="#contact" className="hover:underline">Contato</a></li>
          </ul>
        </nav>

        {/* Ícones Sociais */}
        <div className="flex justify-center space-x-4 mb-4">
          {socialMedia.map((media, index) => (
            <a 
              key={index}
              href={media.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 text-2xl transition duration-300"
              aria-label={media.label}
            >
              {media.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs md:text-sm opacity-75 text-gray-medium">
          &copy; {new Date().getFullYear()} André Moura Passos - Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
