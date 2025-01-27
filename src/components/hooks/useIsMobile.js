import { useState, useEffect } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      // Define os tamanhos de 'sm' e 'md' (breakpoint de 768px)
      setIsMobile(window.innerWidth <= 768);
    };

    // Verifica o tamanho inicial
    checkScreenSize();

    // Adiciona um listener para quando a janela for redimensionada
    window.addEventListener('resize', checkScreenSize);

    // Remove o listener ao desmontar o componente
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return isMobile;
};

export default useIsMobile;
