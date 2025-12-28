import {
    FaInstagram,
    FaFacebookF,
    FaYoutube,
    FaSoundcloud,
    FaTiktok,
    FaSpotify,
    FaApple,
    FaDeezer,
    FaBandcamp
} from "react-icons/fa";

const socialMedia = [
    {
        href: "https://open.spotify.com/artist/4lIiJuoMLpeO6JKNkOcx4y",
        icon: <FaSpotify />,
        label: "Spotify",
        type: "music",
    },
    {
        href: "https://music.apple.com/br/artist/same-bloods-cocktail/1676328013",
        icon: <FaApple />,
        label: "Apple Music",
        type: "music",
    },
    
    {
        href: "https://www.youtube.com/@samebloodscocktail",
        icon: <FaYoutube />,
        label: "YouTube",
        type: "music",
    },
    {
        href: "https://www.deezer.com/us/artist/205700247",
        icon: <FaDeezer />,
        label: "Deezer",
        type: "music",
    },
    {
        href: "https://instagram.com/samebloodscocktail",
        icon: <FaInstagram />,
        label: "Instagram",
        type: "social",
    },
    {
        href: "https://www.facebook.com/people/Same-Bloods-Cocktail/100091738507321/",
        icon: <FaFacebookF />,
        label: "Facebook",
        type: "social",
    },
    {
        href: "https://soundcloud.com/same-bloods-cocktail",
        icon: <FaSoundcloud />,
        label: "SoundCloud",
        type: "music",
    },
    {
        href: "https://samebloodscocktail.bandcamp.com/",
        icon: <FaBandcamp />,
        label: "Bandcamp",
        type: "social",
    },
    {
        href: "https://tiktok.com/@samebloodscocktail",
        icon: <FaTiktok />,
        label: "TikTok",
        type: "music",
    }
];

export default socialMedia;
