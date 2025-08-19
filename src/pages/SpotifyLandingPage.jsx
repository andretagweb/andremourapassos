import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import "../shared/locales/i18n";

import SEO from "../shared/components/common/SEO";

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
  { href: 'https://open.spotify.com/artist/4lIiJuoMLpeO6JKNkOcx4y', icon: <FaSpotify />, label: 'Spotify' },
  { href: 'https://music.apple.com/br/artist/same-bloods-cocktail/1676328013', icon: <FaApple />, label: 'Apple Music' },
  { href: 'https://www.youtube.com/@samebloodscocktail', icon: <FaYoutube />, label: 'YouTube' },
  { href: 'https://tiktok.com/@samebloodscocktail', icon: <FaTiktok />, label: 'TikTok' },
  { href: 'https://www.deezer.com/us/artist/205700247', icon: <FaDeezer />, label: 'Deezer' },
  { href: 'https://soundcloud.com/same-bloods-cocktail', icon: <FaSoundcloud />, label: 'SoundCloud' },
  { href: 'https://samebloodscocktail.bandcamp.com/', icon: <FaBandcamp />, label: 'Bandcamp' },
];

function getCopyByLang(lang) {
  switch ((lang || 'pt').split('-')[0]) {
    case 'en':
      return {
        title: 'Same Bloods Cocktail — Listen on Spotify',
        description:
          'Official landing page of Same Bloods Cocktail. Rock with piano, vocal and instrumental tracks. Listen on Spotify and other platforms.'
      };
    case 'es':
      return {
        title: 'Same Bloods Cocktail — Escucha en Spotify',
        description:
          'Landing page oficial de Same Bloods Cocktail. Rock con piano, temas vocales e instrumentales. Escúchalo en Spotify y otras plataformas.'
      };
    default:
      return {
        title: 'Same Bloods Cocktail — Ouça agora no Spotify',
        description:
          'Landing page oficial do Same Bloods Cocktail. Rock com piano, faixas vocais e instrumentais. Ouça no Spotify e em outras plataformas.'
      };
  }
}

const SpotifyLandingPage = () => {
  const { t, i18n } = useTranslation('spotify');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Mantém o i18n sincronizado com o prefixo da URL
  useEffect(() => {
    const langFromPath = location.pathname.split('/')[1];
    if (['pt', 'en', 'es'].includes(langFromPath) && i18n.language !== langFromPath) {
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
    i18n.changeLanguage(lng); // muda texto imediatamente
    navigate(newPath);        // atualiza URL (e canonical/hreflang)
  };

  const goToHome = () => {
    const lang = location.pathname.split('/')[1];
    const homePath = ['pt', 'en', 'es'].includes(lang) ? `/${lang}` : '/';
    navigate(homePath);
  };

  // SEO dinâmico por idioma/rota
  const langFromPath = location.pathname.split('/')[1] || i18n.language || 'pt';
  const { title, description } = getCopyByLang(langFromPath);
  const canonical = `${window.location.origin}${location.pathname}${location.search}`;
  const ogImage = `${window.location.origin}/images/adslogo-min.png`;

  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords="Same Bloods Cocktail, Spotify, rock com piano, rock, música, instrumental"
        canonical={canonical}
        ogTitle={title}
        ogDescription={description}
        ogType="website"
        ogUrl={canonical}
        ogImage={ogImage}
        twitterCard="summary_large_image"
        twitterTitle={title}
        twitterDescription={description}
        twitterImage={ogImage}
      />

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
          position: 'relative',
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
        }}
      >
        {/* Home */}
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
          aria-label="Home"
        >
          <FaHome />
        </button>

        {/* Flags */}
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
          <button onClick={() => changeLanguage('pt')} style={{ border: 'none', background: 'none', cursor: 'pointer' }} aria-label="Português">
            <img src="https://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg" alt="Português" width="32" height="21" loading="lazy" />
          </button>
          <button onClick={() => changeLanguage('en')} style={{ border: 'none', background: 'none', cursor: 'pointer' }} aria-label="English">
            <img src="https://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg" alt="English" width="32" height="21" loading="lazy" />
          </button>
          <button onClick={() => changeLanguage('es')} style={{ border: 'none', background: 'none', cursor: 'pointer' }} aria-label="Español">
            <img src="https://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg" alt="Español" width="32" height="21" loading="lazy" />
          </button>
        </div>

        {/* Logo */}
        <img
          src="/images/adslogo-min.png"
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

        <p style={{ fontSize: '1rem', textAlign: 'center', maxWidth: '500px', lineHeight: '1.5', marginBottom: '2rem', color: '#b3b3b3' }}>
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

        <p style={{ marginTop: '2rem', color: '#888', fontSize: '0.95rem', maxWidth: '500px', textAlign: 'center' }}>
          {t('noSpotify')}
        </p>

        <div style={{ marginTop: '1.2rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', color: '#aaa', fontSize: '0.9rem' }}>
          {socialMedia
            .filter((media) => media.label !== 'Spotify')
            .map((media) => (
              <a
                key={media.label}
                href={media.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#aaa', textDecoration: 'none' }}
                aria-label={media.label}
              >
                {media.icon} {media.label}
              </a>
            ))}
        </div>
      </div>
    </>
  );
};

export default SpotifyLandingPage;
