import soundcloud from "../../../assets/images/social/icons8-soundcloud.svg";
import instagram from "../../../assets/images/social/icons8-instagram.svg";
import facebook from "../../../assets/images/social/icons8-facebook.svg";
import tiktok from "../../../assets/images/social/icons8-tiktok.svg";
import youtube from "../../../assets/images/social/icons8-youtube.svg";

const socialMedia = [
    { 
        href: "https://instagram.com/samebloodscocktail", 
        icon: "📷", // Alternativa para Instagram caso precise de emoji
        svg: instagram,
        label: "Instagram"
    },
    { 
        href: "https://www.facebook.com/profile.php?id=100091738507321", 
        icon: "📘",
        svg: facebook,
        label: "Facebook"
    },
    { 
        href: "https://www.youtube.com/@samebloodscocktail", 
        icon: "▶️",
        svg: youtube,
        label: "YouTube"
    },
    { 
        href: "https://soundcloud.com/same-bloods-cocktail", 
        icon: "🎵",
        svg: soundcloud,
        label: "SoundCloud"
    },
    { 
        href: "https://tiktok.com/@samebloodscocktail", 
        icon: "🎶",
        svg: tiktok,
        label: "TikTok"
    }
];

export default socialMedia;