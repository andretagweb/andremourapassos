import { FaInstagram, FaFacebookF, FaYoutube, FaSoundcloud, FaTiktok, FaSpotify, FaApple, FaLinkedin } from "react-icons/fa";

const socialMedia = [
    { 
        href: "https://open.spotify.com/artist/4lIiJuoMLpeO6JKNkOcx4y", 
        icon: <FaSpotify />,
        label: "Spotify"
    },
    { 
        href: "https://music.apple.com/br/artist/same-bloods-cocktail/1676328013", 
        icon: <FaApple />,
        label: "Apple Music"
    },
    { 
        href: "https://soundcloud.com/same-bloods-cocktail", 
        icon: <FaSoundcloud />,
        label: "SoundCloud"
    },
    { 
        href: "https://www.youtube.com/@samebloodscocktail", 
        icon: <FaYoutube />,
        label: "YouTube"
    },
    { 
        href: "https://tiktok.com/@samebloodscocktail", 
        icon: <FaTiktok />,
        label: "TikTok"
    },
    { 
        href: "https://instagram.com/samebloodscocktail", 
        icon: <FaInstagram />, 
        label: "Instagram"
    },
    { 
        href: "https://www.facebook.com/people/Same-Bloods-Cocktail/100091738507321/", 
        icon: <FaFacebookF />,
        label: "Facebook"
    },
    { 
        href: "https://www.linkedin.com/in/andremourapassos/", 
        icon: <FaLinkedin />,
        label: "Linkedin"
    }
];

export default socialMedia;
