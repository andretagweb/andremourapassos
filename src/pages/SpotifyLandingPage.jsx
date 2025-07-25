import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import "../shared/locales/i18n";

import {
  FaYoutube,
  FaSoundcloud,
  FaTiktok,
  FaSpotify,
  FaApple,
  FaHome,
  FaDeezer,
  FaBandcamp
} from 'react-icons/fa';


const socialMedia = [
  {
    href: 'https://open.spotify.com/artist/4lIiJuoMLpeO6JKNkOcx4y',
    icon: <FaSpotify />,
    label: 'Spotify',
  },
  {
    href: 'https://music.apple.com/br/artist/same-bloods-cocktail/1676328013',
    icon: <FaApple />,
    label: 'Apple Music',
  },
  {
    href: 'https://www.youtube.com/@samebloodscocktail',
    icon: <FaYoutube />,
    label: 'YouTube',
  },
  {
    href: 'https://tiktok.com/@samebloodscocktail',
    icon: <FaTiktok />,
    label: 'TikTok',
  },
  {
    href: "https://www.deezer.com/us/artist/205700247",
    icon: <FaDeezer />,
    label: "Deezer"
  },
  {
    href: 'https://soundcloud.com/same-bloods-cocktail',
    icon: <FaSoundcloud />,
    label: 'SoundCloud',
  },
  {
    href: "https://samebloodscocktail.bandcamp.com/",
    icon: <FaBandcamp />,
    label: "Bandcamp"
  },
];

const SpotifyLandingPage = () => {
  const { t, i18n } = useTranslation('spotify');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const langFromPath = location.pathname.split('/')[1];
    if (
      ['pt', 'en', 'es'].includes(langFromPath) &&
      i18n.language !== langFromPath
    ) {
      i18n.changeLanguage(langFromPath);
    }
  }, [location.pathname, i18n]);

  const handleClick = () => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-993081860/jTnRCMm_mLsaEIT0xNkD',
        value: 1.0,
        currency: 'BRL',
      });
    }
  };

  const changeLanguage = (lng) => {
    const pathParts = location.pathname.split('/');
    if (['pt', 'en', 'es'].includes(pathParts[1])) {
      pathParts[1] = lng;
    } else {
      pathParts.splice(1, 0, lng);
    }

    const newPath = pathParts.join('/');
    i18n.changeLanguage(lng);
    navigate(newPath);
  };

  const goToHome = () => {
    const lang = location.pathname.split('/')[1];
    const homePath = ['pt', 'en', 'es'].includes(lang) ? `/${lang}` : '/';
    navigate(homePath);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #191414, #121212)',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 1.5rem',
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        position: 'relative',
      }}
    >
      {/* Home button */}
      <button
        onClick={goToHome}
        style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          background: 'none',
          border: 'none',
          color: '#ffffff',
          fontSize: '1.8rem',
          cursor: 'pointer',
        }}
        title="Home"
      >
        <FaHome />
      </button>

      {/* Language flags */}
      <div
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'center',
        }}
      >
        <button onClick={() => changeLanguage('pt')} style={{ border: 'none', background: 'none' }}>
          <img src="https://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg" alt="Português" width="32" height="21" />
        </button>
        <button onClick={() => changeLanguage('en')} style={{ border: 'none', background: 'none' }}>
          <img src="https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg" alt="English" width="32" height="21" />
        </button>
        <button onClick={() => changeLanguage('es')} style={{ border: 'none', background: 'none' }}>
          <img src="https://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg" alt="Español" width="32" height="21" />
        </button>
      </div>

      {/* Logo */}
      <img
        src="/images/spotify-min.png"
        alt="Same Bloods Cocktail Logo"
        style={{
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          marginBottom: '1.5rem',
          border: '2px solid #1DB954',
        }}
      />

      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '0.9rem', fontFamily: "Limelight,serif" }}>
        Same Bloods Cocktail
      </h1>

      <p style={{
        fontSize: '1rem',
        textAlign: 'center',
        maxWidth: '500px',
        lineHeight: '1.5',
        marginBottom: '2rem',
        color: '#b3b3b3',
      }}>
        {t('description')}
      </p>

      <a
        href="https://open.spotify.com/artist/4lIiJuoMLpeO6JKNkOcx4y"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        style={{
          backgroundColor: '#1DB954',
          color: 'rgb(111 3 3)',
          padding: '1rem 2rem',
          borderRadius: '32px',
          fontSize: '1.1rem',
          fontWeight: '600',
          textDecoration: 'none',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 14px rgba(0,0,0,0.3)',
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1.0)')}
      >
        🎧 {t('button')}
      </a>

      <p style={{
        marginTop: '2rem',
        color: '#888',
        fontSize: '0.95rem',
        maxWidth: '500px',
        textAlign: 'center',
      }}>
        {t('noSpotify')}
      </p>

      <div style={{
        marginTop: '1.2rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1rem',
        color: '#aaa',
        fontSize: '0.9rem',
      }}>
        {socialMedia
          .filter((media) => media.label !== 'Spotify')
          .map((media) => (
            <a
              key={media.label}
              href={media.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                color: '#aaa',
                textDecoration: 'none',
              }}
            >
              {media.icon} {media.label}
            </a>
          ))}
      </div>
    </div>
  );
};

export default SpotifyLandingPage;
