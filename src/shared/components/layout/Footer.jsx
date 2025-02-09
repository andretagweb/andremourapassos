function Footer() {
    return (
      <footer className="bg-dark text-white py-4 xl:mb-0 lg:mb-14 md:mb-16 sm:mb-24 xsm:mb-24">
        <div className="container mx-auto text-center">
          <p>© 2024 Meu Nome. Todos os direitos reservados.</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  