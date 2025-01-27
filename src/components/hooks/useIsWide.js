import { useState, useEffect } from 'react';

const useIsWide = (wideLimit = 1440) => {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth >= wideLimit);

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= wideLimit);
    };

    // Adiciona o evento de redimensionamento
    window.addEventListener('resize', handleResize);

    // Limpa o evento ao desmontar o componente
    return () => window.removeEventListener('resize', handleResize);
  }, [wideLimit]);

  return isWideScreen;
};

export default useIsWide;
